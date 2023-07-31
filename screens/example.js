import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Modal,
  ActivityIndicator,
  Vibration,
  FlatList,
} from "react-native";

import { useState } from "react";

export default function Example() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [list, setList] = useState([]);
  const handleGetUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setList(users);
  };
  return (
    <View style={styles.container}>
      <Text className="text-red-500">React native tailwindcss</Text>

      <StatusBar style="auto" backgroundColor="skyblue" />
      <Button
        title="Open Modal"
        onPress={() => {
          setIsOpenModal(true);
          Vibration.vibrate(10 * 1000);
        }}
        color={"green"}
      />
      {/* <ActivityIndicator /> */}
      <Button
        title="Get User List"
        onPress={() => handleGetUsers()}
        color={"green"}
      />
      {list.map((item) => {
        return <Text key={item.id}>{item.username}</Text>;
      })}
      <Modal
        visible={isOpenModal}
        onRequestClose={() => setIsOpenModal(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: "green", padding: 60 }}>
          <Text>This is real Modal</Text>
          <Button
            title="close"
            onPress={() => {
              setIsOpenModal(false);
              Vibration.cancel();
            }}
          />
        </View>
      </Modal>
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
