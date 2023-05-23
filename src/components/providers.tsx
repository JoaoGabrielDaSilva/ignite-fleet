import { ReactNode } from "react";
import { AppProvider } from "@realm/react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";
import { REALM_APP_ID } from "@env";

import { theme } from "../theme";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <AppProvider id={REALM_APP_ID}>
      <SafeAreaProvider>
        <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
      </SafeAreaProvider>
    </AppProvider>
  );
};
