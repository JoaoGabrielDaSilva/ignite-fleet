import { Box, FlatList, Text } from "native-base";
import { HomeHeader } from "../components/home-header";
import { CarStatus } from "../components/car-status";
import { useNavigation } from "@react-navigation/native";
import { useQuery, useRealm } from "../libs/realm";
import { Historic } from "../libs/realm/schemas/Historic";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { HistoricCard } from "../components/historic-card";
import { VehicleHistoricModel } from "../models/vehicle-historic";
import { format } from "date-fns";

export const Home = () => {
  const [vehicleInUse, setVehicleInUse] = useState<Historic | null>(null);
  const [usageHistoric, setUsageHistoric] = useState<VehicleHistoricModel[]>(
    []
  );

  const { navigate } = useNavigation();

  const historic = useQuery(Historic);
  const realm = useRealm();

  const fetchVehicleInUse = () => {
    try {
      const vehicle = historic.filtered("status = 'departure'")[0];

      setVehicleInUse(vehicle);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Veículo em uso. Não foi possível carregar o veículo em uso."
      );
    }
  };

  const handleRegisterMovement = () => {
    if (vehicleInUse?._id) {
      return navigate("Arrival", { id: vehicleInUse?._id.toString() });
    }
    navigate("Departure");
  };

  const handleHistoricDetails = (id: string) => {
    navigate("Arrival", { id });
  };

  const fetchHistoric = () => {
    try {
      const response = historic.filtered(
        "status = 'arrival' SORT(created_at DESC)"
      );

      setUsageHistoric(
        response.map<VehicleHistoricModel>((item) => ({
          id: item._id,
          createdAt: format(new Date(item.created_at), "dd/MM/yyyy 'às' HH:mm"),
          status: item.status,
          licensePlate: item.license_plate,
          isSync: false,
        }))
      );
    } catch (error) {
      console.log(error);
      Alert.alert("Histórico", "Não foi possível carregar o histórico");
    }
  };

  useEffect(() => {
    fetchHistoric();
    fetchVehicleInUse();

    realm.addListener("change", fetchVehicleInUse);
    realm.addListener("change", fetchHistoric);

    return () => {
      if (realm && !realm.isClosed) {
        realm.removeListener("change", fetchVehicleInUse);
        realm.addListener("change", fetchHistoric);
      }
    };
  }, []);

  return (
    <Box flex="1" bg="gray.800">
      <HomeHeader />
      <Box flex="1">
        <FlatList
          contentContainerStyle={{
            padding: 24,
          }}
          ListHeaderComponent={
            <>
              <CarStatus
                licensePlate={vehicleInUse?.license_plate!}
                onPress={handleRegisterMovement}
              />
              <Text
                color="gray.200"
                my="4"
                fontFamily="bold"
                fontSize="lg"
                mt="6"
              >
                Histórico
              </Text>
            </>
          }
          ListEmptyComponent={
            <Text color="gray.400" fontFamily="regular" alignSelf="center">
              Nenhum registro de utilização
            </Text>
          }
          data={usageHistoric}
          renderItem={({ item }) => (
            <HistoricCard
              data={item}
              isSync={false}
              onPress={() => handleHistoricDetails(item.id)}
              mb="4"
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </Box>
    </Box>
  );
};
