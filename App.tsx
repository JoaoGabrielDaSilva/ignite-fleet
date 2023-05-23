import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider, Box } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex="1">
        <StatusBar style="auto" />
      </Box>
    </NativeBaseProvider>
  );
}
