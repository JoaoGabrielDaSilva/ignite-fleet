import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  HStack,
  IBoxProps,
  IPressableProps,
  Icon,
  Pressable,
  Text,
  VStack,
} from "native-base";
import { VehicleHistoricModel } from "../models/vehicle-historic";

type HistoricCardProps = IPressableProps & {
  isSync?: boolean;
  data: VehicleHistoricModel;
};

export const HistoricCard = ({ data, isSync, ...props }: HistoricCardProps) => {
  const { licensePlate, createdAt, status } = data;

  return (
    <Pressable {...props} _pressed={{ opacity: 0.7 }}>
      <HStack
        alignItems="center"
        justifyContent="space-between"
        bg="gray.700"
        rounded="sm"
        p="4"
      >
        <VStack space="1">
          <Text fontFamily="bold" color="gray.200" fontSize="xl">
            {licensePlate}
          </Text>
          <Text fontFamily="regular" color="gray.400">
            Saída em 02/03 às 13:30
          </Text>
        </VStack>
        {isSync ? (
          <Icon
            as={<Ionicons name="checkmark" />}
            color="brand.light"
            size="lg"
          />
        ) : (
          <Icon
            as={<MaterialCommunityIcons name="cloud-sync-outline" />}
            color="gray.400"
            size="lg"
          />
        )}
      </HStack>
    </Pressable>
  );
};
