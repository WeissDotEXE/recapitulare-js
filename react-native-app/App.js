import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {NativeRouter,Switch,Route} from 'react-router-native'
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
import HomeScreen from "./components/Screens/HomeScreen";
import Employee from "./components/Screens/Employee";
import Projects from "./components/Screens/Projects";

export default function App() {
  return (
    <NativeRouter>
      <View>
      {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/employees"component={Employee} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
        
      </View>
    </NativeRouter>
  )
}

const styles = StyleSheet.create({
});
