import { useRef, useState } from "react";
import { Box, KeyboardAvoidingView, ScrollView, VStack } from "native-base";
import { TextInput, Platform, Alert } from "react-native";

import { licensePlateValidate } from "../utils/license-plate-validate";

import { Header } from "../components/header";
import { LicensePlateInput } from "../components/license-plate-input";
import { TextAreaInput } from "../components/text-area-input";
import { Button } from "../components/button";

import { useRealm } from "../libs/realm";
import { Historic } from "../libs/realm/schemas/Historic";
import { useUser } from "@realm/react";
import { useNavigation } from "@react-navigation/native";

export const Departure = () => {
  const [licensePlate, setLicensePlate] = useState("");
  const [description, setDescription] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const { goBack } = useNavigation();

  const licensePlateRef = useRef<TextInput>(null);
  const descriptionRef = useRef<TextInput>(null);

  const realm = useRealm();
  const user = useUser();

  const handleDepartureRegister = () => {
    try {
      if (!licensePlateValidate(licensePlate)) {
        licensePlateRef?.current?.focus();
        return Alert.alert(
          "Placa Inválida",
          "A placa é inválida. Por favor, informe a placa correta do veículo"
        );
      }

      if (!description.trim().length) {
        descriptionRef?.current?.focus();
        return Alert.alert(
          "Finalidade",
          "Por favor, informe a finalidade da utilização do veículo"
        );
      }
      setIsRegistering(true);

      realm.write(() => {
        realm.create(
          "Historic",
          Historic.generate({
            user_id: user!.id,
            description,
            license_plate: licensePlate.toUpperCase(),
          })
        );
      });

      Alert.alert("Saída", "Saída do veículo registarada com sucesso!");
      goBack();
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível registrar a saída do veículo");
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <Box flex="1" bg="gray.800">
      <Header title="Saída" />

      <KeyboardAvoidingView
        flex="1"
        behavior={Platform.OS === "android" ? "height" : "position"}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            padding: 16,
          }}
        >
          <VStack space="4">
            <LicensePlateInput
              ref={licensePlateRef}
              label="Placa do Veículo"
              placeholder="BRA1234"
              blurOnSubmit={false}
              onSubmitEditing={() => descriptionRef?.current?.focus()}
              onChangeText={setLicensePlate}
              editable={!isRegistering}
            />

            <TextAreaInput
              ref={descriptionRef}
              label="Finalidade"
              placeholder="Vou utilizar o carro para..."
              onSubmitEditing={handleDepartureRegister}
              returnKeyType="send"
              blurOnSubmit
              onChangeText={setDescription}
              editable={!isRegistering}
            />
            <Button isLoading={isRegistering} onPress={handleDepartureRegister}>
              Registrar Saída
            </Button>
          </VStack>
        </ScrollView>
      </KeyboardAvoidingView>
    </Box>
  );
};
