import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const changeHandler = (event) => {
    setText(event.target.value);
  };
  return (
    <View style={{ padding: 50 ,flexDirection:'column'}}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Add your to do"
          style={{
            borderColor: "black",
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
          }}
        />
        <Button title="add" />
        <Text>{text}</Text>
      </View>
    </View>
  );
}
