import { useRef } from "react";
import { Box, KeyboardAvoidingView, ScrollView, VStack } from "native-base";
import { TextInput, Platform } from "react-native";
import { Header } from "../components/header";
import { LicensePlateInput } from "../components/license-plate-input";
import { TextAreaInput } from "../components/text-area-input";
import { Button } from "../components/button";

export const Departure = () => {
  const descriptionRef = useRef<TextInput>(null);

  const handleRegisterDeparture = () => {};

  return (
    <Box flex="1" bg="gray.800">
      <Header title="Saída" />

      <KeyboardAvoidingView
        flex="1"
        behavior={Platform.OS === "android" ? "height" : "position"}
      >
        <ScrollView
          contentContainerStyle={{
            padding: 16,
          }}
        >
          <VStack space="4">
            <LicensePlateInput
              label="Placa do Veículo"
              inputProps={{
                placeholder: "BRA1234",
                blurOnSubmit: false,
                onSubmitEditing: () => descriptionRef?.current?.focus(),
              }}
            />

            <TextAreaInput
              ref={descriptionRef}
              label="Finalidade"
              inputProps={{
                placeholder: "Vou utilizar o carro para...",
                onSubmitEditing: handleRegisterDeparture,
                returnKeyType: "send",
                blurOnSubmit: true,
              }}
            />
            <Button onPress={handleRegisterDeparture}>Registrar Saída</Button>
          </VStack>
        </ScrollView>
      </KeyboardAvoidingView>
    </Box>
  );
};
