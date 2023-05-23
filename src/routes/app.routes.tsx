import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/home";
import { Departure } from "../screens/departure";
import { Arrival } from "../screens/arrival";

const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Departure" component={Departure} />
      <Screen name="Arrival" component={Arrival} />
    </Navigator>
  );
};
