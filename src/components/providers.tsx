import { ReactNode } from "react";
import { AppProvider, UserProvider } from "@realm/react";
import { NativeBaseProvider } from "native-base";
import { REALM_APP_ID } from "@env";

import { theme } from "../theme";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <AppProvider id={REALM_APP_ID}>
      <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
    </AppProvider>
  );
};
