import { Box } from "native-base";
import { Header } from "../components/header";
import { CarStatus } from "../components/car-status";

export const Home = () => {
  return (
    <Box flex="1" bg="gray.800">
      <Header />
      <Box p="6">
        <CarStatus licensePlate="XXX-000" />
      </Box>
    </Box>
  );
};
