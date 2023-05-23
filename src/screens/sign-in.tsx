import { HStack, Heading, Text, VStack } from "native-base";
import * as WebBroser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { Alert, ImageBackground } from "react-native";
import { Realm, useApp } from "@realm/react";
import backgroundImage from "../assets/background.png";
import { Button } from "../components/button";
import { ANDROID_CLIENTE_ID, IOS_CLIENTE_ID } from "@env";
import { useEffect, useState } from "react";

WebBroser.maybeCompleteAuthSession();

export const SignIn = () => {
  const [isAuthentication, setIsAuthentication] = useState(false);

  const [_, response, googleSignIn] = Google.useAuthRequest({
    androidClientId: ANDROID_CLIENTE_ID,
    iosClientId: IOS_CLIENTE_ID,
    scopes: ["profile", "email"],
  });

  const app = useApp();

  const handleGoogleSignIn = async () => {
    setIsAuthentication(true);
    const response = await googleSignIn();
    if (response.type !== "success") return setIsAuthentication(false);
  };

  useEffect(() => {
    if (response?.type === "success") {
      if (response?.authentication?.idToken) {
        const credentials = Realm.Credentials.jwt(
          response.authentication.idToken
        );

        try {
          app.logIn(credentials);
        } catch (error) {
          Alert.alert(
            "Entrar",
            "Não foi possível conectar-se a sua conta Google."
          );
          setIsAuthentication(false);
        }
      } else {
        Alert.alert(
          "Entrar",
          "Não foi possível conectar-se a sua conta Google."
        );
        setIsAuthentication(false);
      }
    }
  }, [response]);

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
          <Button onPress={handleGoogleSignIn} isLoading={isAuthentication}>
            Entrar com Google
          </Button>
        </HStack>
      </VStack>
    </ImageBackground>
  );
};
