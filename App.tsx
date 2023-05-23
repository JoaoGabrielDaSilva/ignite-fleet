import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "expo-status-bar";
import { Box } from "native-base";
import { SignIn } from "./src/screens";
import { Providers } from "./src/components/providers";
import { Home } from "./src/screens/home";
import { UserProvider } from "@realm/react";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  if (!fontsLoaded) return null;

  return (
    <Providers>
      <Box flex="1">
        <StatusBar style="light" backgroundColor="transparent" translucent />
        <UserProvider fallback={SignIn}>
          <Home />
        </UserProvider>
      </Box>
    </Providers>
  );
}
