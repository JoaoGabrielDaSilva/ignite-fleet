import { Box } from "native-base";
import { HomeHeader } from "../components/home-header";
import { CarStatus } from "../components/car-status";
import { useNavigation } from "@react-navigation/native";
import { useQuery, useRealm } from "../libs/realm";
import { Historic } from "../libs/realm/schemas/Historic";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

export const Home = () => {
  const [vehicleInUse, setVehicleInUse] = useState<Historic | null>(null);

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

  useEffect(() => {
    fetchVehicleInUse();

    realm.addListener("change", fetchVehicleInUse);

    return () => realm.removeListener("change", fetchVehicleInUse);
  }, []);

  return (
    <Box flex="1" bg="gray.800">
      <HomeHeader />
      <Box p="6">
        <CarStatus
          licensePlate={vehicleInUse?.license_plate!}
          onPress={handleRegisterMovement}
        />
      </Box>
    </Box>
  );
};
