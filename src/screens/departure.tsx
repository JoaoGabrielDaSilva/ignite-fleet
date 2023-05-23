import { useRef, useState } from "react";
import { Box, KeyboardAvoidingView, ScrollView, VStack } from "native-base";
import { TextInput, Platform, Alert } from "react-native";
import { Header } from "../components/header";
import { LicensePlateInput } from "../components/license-plate-input";
import { TextAreaInput } from "../components/text-area-input";
import { Button } from "../components/button";
import { licensePlateValidate } from "../utils/license-plate-validate";

export const Departure = () => {
  const [licensePlate, setLicensePlate] = useState("");
  const [description, setDescription] = useState("");

  const licensePlateRef = useRef<TextInput>(null);
  const descriptionRef = useRef<TextInput>(null);

  const handleDepartureRegister = () => {
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
            />

            <TextAreaInput
              ref={descriptionRef}
              label="Finalidade"
              placeholder="Vou utilizar o carro para..."
              onSubmitEditing={handleDepartureRegister}
              returnKeyType="send"
              blurOnSubmit
              onChangeText={setDescription}
            />
            <Button onPress={handleDepartureRegister}>Registrar Saída</Button>
          </VStack>
        </ScrollView>
      </KeyboardAvoidingView>
    </Box>
  );
};
