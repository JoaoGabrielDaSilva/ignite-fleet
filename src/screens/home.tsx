import { Box } from "native-base";
import { HomeHeader } from "../components/home-header";
import { CarStatus } from "../components/car-status";
import { useNavigation } from "@react-navigation/native";

export const Home = () => {
  const { navigate } = useNavigation();

  return (
    <Box flex="1" bg="gray.800">
      <HomeHeader />
      <Box p="6">
        <CarStatus
          licensePlate="XXX-000"
          onPress={() => navigate("Departure")}
        />
      </Box>
    </Box>
  );
};
