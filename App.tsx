import "react-native-get-random-values";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { StatusBar } from "expo-status-bar";
import { SignIn } from "./src/screens";
import { Providers } from "./src/components/providers";
import { UserProvider } from "@realm/react";
import { Routes } from "./src/routes";
import { RealmProvider } from "./src/libs/realm";
import { Loading } from "./src/components/loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <Providers>
      {!fontsLoaded ? (
        <Loading />
      ) : (
        <>
          <StatusBar style="light" backgroundColor="transparent" translucent />
          <UserProvider fallback={SignIn}>
            <RealmProvider>
              <Routes />
            </RealmProvider>
          </UserProvider>
        </>
      )}
    </Providers>
  );
}
