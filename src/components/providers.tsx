import { ReactNode } from "react";
import { NativeBaseProvider } from "native-base";
import { theme } from "../theme";

type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
};
