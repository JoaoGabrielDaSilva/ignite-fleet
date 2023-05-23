import { Box, HStack, Icon, Text, VStack } from "native-base";
import { Alert } from "react-native";
import { Header } from "../components/header";
import { Button } from "../components/button";
import { IconButton } from "../components/icon-button";
import { Ionicons } from "@expo/vector-icons";
import { useObject, useRealm } from "../libs/realm";
import { Historic } from "../libs/realm/schemas/Historic";
import { useNavigation } from "@react-navigation/native";
import { BSON } from "realm";

export const Arrival = ({ route: { params } }) => {
  const vehicle = useObject(Historic, new BSON.UUID(params.id));

  const realm = useRealm();
  const { goBack } = useNavigation();

  const handleArrivalRegister = () => {
    try {
      if (!vehicle) throw new Error();
      realm.write(() => {
        vehicle.status = "arrival";
        vehicle.updated_at = new Date();
      });
      Alert.alert("Chegada", "Chegada registrada com sucesso!");
      goBack();
    } catch (error) {
      Alert.alert(
        "Registrar",
        "Não foi possível registar a chegada do veículo"
      );
    }
  };

  const removeVehicleUsage = () => {
    try {
      realm.write(() => {
        realm.delete(vehicle);
      });
      goBack();
    } catch (error) {
      Alert.alert("Remover", "Não foi possível remover o veículo");
    }
  };

  const handleRemoveVehicleUsage = () =>
    Alert.alert("Cancelar", "Cancelar a utilização do veículo", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: removeVehicleUsage,
      },
    ]);

  return (
    <Box flex="1" bg="gray.800">
      <Header title="Chegada" />
      <VStack flex="1">
        <VStack p="6" mt="4" space="8">
          <Box>
            <Text color="gray.300" fontFamily="regular">
              Placa do veículo
            </Text>
            <Text color="gray.100" fontFamily="bold" fontSize="xxxl">
              {vehicle?.license_plate}
            </Text>
          </Box>
          <Box>
            <Text color="gray.400" fontFamily="regular">
              Finalidade
            </Text>
            <Text
              color="gray.100"
              fontSize="md"
              fontFamily="regular"
              textAlign="justify"
            >
              {vehicle?.description}
            </Text>
          </Box>
        </VStack>
      </VStack>
      <HStack p="6" space="4">
        <IconButton
          onPress={handleRemoveVehicleUsage}
          icon={
            <Icon
              as={<Ionicons name="close" />}
              color="brand.medium"
              size="3xl"
            />
          }
        />
        <Button onPress={handleArrivalRegister}>Registar Chegada</Button>
      </HStack>
    </Box>
  );
};
