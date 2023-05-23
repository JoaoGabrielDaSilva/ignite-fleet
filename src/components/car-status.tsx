import { Ionicons } from "@expo/vector-icons";
import { Box, HStack, Icon, Pressable, Text } from "native-base";

type CarStatusProps = {
  licensePlate: string;
};

export const CarStatus = ({ licensePlate }: CarStatusProps) => (
  <Box p="6" bg="gray.700" rounded="md">
    <HStack alignItems="center" space="4">
      <Box p="4" bg="gray.600" rounded="md">
        <Icon
          as={<Ionicons name={licensePlate ? "car-outline" : "key-outline"} />}
          size="5xl"
          color="brand.light"
        />
      </Box>
      <HStack flex="1">
        <Text fontFamily="regular" color="gray.100">
          {licensePlate
            ? `Veículo ${licensePlate} em uso`
            : "Nenhum veículo em uso"}
          .{" "}
          <Text fontFamily="bold" color="brand.light">
            {licensePlate
              ? "Clique aqui para registrar a chegada"
              : "  Clique aqui para registrar a saída"}
          </Text>
        </Text>
      </HStack>
    </HStack>
  </Box>
);
