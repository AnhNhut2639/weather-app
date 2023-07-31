import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import ProfileScreen from "./screens/Profile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          options={{ title: "Profile" }}
          name="Profile"
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
