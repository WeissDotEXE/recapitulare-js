import React, { useState } from "react";
import { Button, StyleSheet, Text, View, Pressable } from "react-native";

const HomeScreen = ({history}) => {
  return (
    <View style={styles.navbar}>
      <Button title="Home" onPress={()=>history.push('/')}/>
      <Button title="Projects" onPress={()=>history.push("/projects")}/>
      <Button title="Employees" onPress={()=>history.push('/employees')}/>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: "30%",
    justifyContent:"space-between",
    flexDirection: "row",
    marginTop:30,
    paddingTop:20
  },
});
export default HomeScreen;
