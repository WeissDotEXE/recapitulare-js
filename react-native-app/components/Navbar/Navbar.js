import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import HomeScreen from "../Screens/HomeScreen";
import Employee from "../Screens/Employee";
import Projects from "../Screens/Projects";

const Navbar = (history) => {
  return (
    <View style={styles.container}>
      <Button title="Home" onPress={()=>history.push("/")}/>
      <Button title="Projects" onPress={()=>history.push("/projects")}/>
      <Button title="Employees" onPress={()=>history.push("/employees")}/>
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

export default Navbar;
