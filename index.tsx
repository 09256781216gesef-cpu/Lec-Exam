import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState("");

  return (
    <View style={styles.screen}>
      <Image
        source={{
          uri: "https://64.media.tumblr.com/15e816d0a83fe33db4f58b340a54c7e5/e190d2ff34c6c941-8b/s400x600/af8a8396fa30af18a338cee3c1142d8d79aa3215.jpg",
        }}
        style={styles.photo}
      />

      <TextInput
        placeholder="Type your name..."
        onChangeText={setName}
        style={styles.input}
        value={name}
      />

      <Text style={styles.name}>
        {name === "" ? "Hello!" : `Hello, ${name}!`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
  },
  photo: { width: 120, height: 120, borderRadius: 60, marginBottom: 20 },
  input: {
    height: 40,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    width: 200,
    backgroundColor: "#fff",
  },
  name: { fontSize: 22, fontWeight: "bold", marginTop: 12 },
});
