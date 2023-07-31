import { Text, View, StyleSheet } from "react-native";
import { memo } from "react";

function ProfileScreen({ navigate, route }) {
  return (
    <View style={styles.container}>
      <Text className="text-green-500 text-3xl">
        ProfileScreen {route.params.name}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(ProfileScreen);
