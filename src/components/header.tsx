import {
  Box,
  HStack,
  Icon,
  IconButton,
  Text,
  VStack,
  useToken,
} from "native-base";
import { Image } from "expo-image";
import { useApp, useUser } from "@realm/react";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const blurhash = "L184i9kCbIof00ayjZay~qj[ayj@";

export const Header = () => {
  const user = useUser();
  const app = useApp();

  const insets = useSafeAreaInsets();

  const handleLogout = () => {
    app.currentUser?.logOut();
  };

  return (
    <HStack
      pt={`${insets.top + 32}px`}
      pb="4"
      pl="6"
      pr="2"
      alignItems="center"
      bg="gray.700"
      justifyContent="space-between"
    >
      <HStack alignItems="center">
        <Box rounded="md" w="12" h="12" overflow="hidden">
          <Image
            style={{
              flex: 1,
            }}
            source={{ uri: user?.profile.pictureUrl }}
            placeholder={blurhash}
          />
        </Box>
        <VStack ml="4">
          <Text color="gray.100" fontFamily="regular" fontSize="md">
            Olá,{" "}
          </Text>
          <Text fontFamily="bold" fontSize="lg" color="gray.100">
            {user?.profile.name}
          </Text>
        </VStack>
      </HStack>
      <IconButton
        onPress={handleLogout}
        _pressed={{
          bg: "transparent",
        }}
        icon={
          <Icon as={<Ionicons name="ios-power" />} color="gray.400" size="lg" />
        }
      />
    </HStack>
  );
};
