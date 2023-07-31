import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";

export default function HomeScreen({ navigation }) {
  const [username, setUserName] = useState("");
  return (
    <View style={styles.container}>
      <Text className="text-green-500 text-3xl">HomeScreen {username}</Text>
      <Button
        title="Go to profile"
        onPress={() => navigation.navigate("Profile", { name: "User" })}
      />
      <KeyboardAvoidingView>
        <View className="h-12 w-52  shadow-xl rounded-lg">
          <TextInput
            placeholder="type your username..."
            className="rounded-lg w-full h-full p-2 shadow-lg shadow-slate-600"
            onChangeText={setUserName}
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
