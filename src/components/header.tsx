import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { HStack, Icon, IconButton, Text } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const { goBack } = useNavigation();

  return (
    <HStack
      pr="6"
      px="2"
      pt={`${insets.top + 12}px`}
      pb="2"
      bg="gray.700"
      alignItems="center"
      justifyContent="space-between"
    >
      <IconButton
        onPress={goBack}
        variant="unstyled"
        icon={
          <Icon
            as={<Ionicons name="arrow-back" />}
            size="2xl"
            color="brand.medium"
          />
        }
      />
      <Text color="gray.100" fontFamily="bold" fontSize="xl">
        {title}
      </Text>
    </HStack>
  );
};
