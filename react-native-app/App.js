import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";

import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  View,
  Pressable,
} from "react-native";
import Icon from "react-native-ico-material-design";
import Navbar from "./components/Navbar/Navbar";
// import HomeScreen from "./components/Screens/HomeScreen";
// import Register from "./components/Screens/Register";
// import Login from "./components/Screens/Login";

const iconHeight = 26;
const iconWidth = 26;
export default function App() {
  return (
    <Navbar />
  )
}

const styles = StyleSheet.create({
});
