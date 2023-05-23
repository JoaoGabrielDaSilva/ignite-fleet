import { Ionicons } from "@expo/vector-icons";
import {
  Box,
  HStack,
  IPressableProps,
  Icon,
  Pressable,
  Text,
} from "native-base";

type CarStatusProps = IPressableProps & {
  licensePlate: string;
};

export const CarStatus = ({ licensePlate, ...props }: CarStatusProps) => {
  const message = licensePlate
    ? `Veículo ${licensePlate} em uso`
    : "Nenhum veículo em uso";

  const status = licensePlate ? "chegada" : "saída";

  return (
    <Pressable _pressed={{ opacity: 0.7 }} {...props}>
      <Box p="6" bg="gray.700" rounded="md">
        <HStack alignItems="center" space="4">
          <Box p="4" bg="gray.600" rounded="md">
            <Icon
              as={
                <Ionicons name={licensePlate ? "car-outline" : "key-outline"} />
              }
              size="5xl"
              color="brand.light"
            />
          </Box>
          <HStack flex="1">
            <Text fontFamily="regular" color="gray.100">
              {message}.{" "}
              <Text fontFamily="bold" color="brand.light">
                Clique aqui para registrar a {status}
              </Text>
            </Text>
          </HStack>
        </HStack>
      </Box>
    </Pressable>
  );
};
