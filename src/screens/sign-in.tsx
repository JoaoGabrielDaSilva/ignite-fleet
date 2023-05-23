import { Box, HStack, Heading, Text, VStack } from "native-base";
import { ImageBackground } from "react-native";
import backgroundImage from "../assets/background.png";
import { Button } from "../components/button";

export const SignIn = () => {
  return (
    <ImageBackground source={backgroundImage} style={{ flex: 1 }}>
      <VStack flex="1" alignItems="center" pt="40" p="16">
        <Heading color="brand.light" fontSize="xxxl" fontFamily="bold">
          Ignite Fleet
        </Heading>
        <Text color="white" fontSize="md" fontFamily="regular" mb="8">
          Gestão de uso de veículos
        </Text>
        <HStack>
          <Button onPress={() => {}}>Entrar com Google</Button>
        </HStack>
      </VStack>
    </ImageBackground>
  );
};
