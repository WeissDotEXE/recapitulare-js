import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import {NativeRouter,Switch,Route} from 'react-router-native'
import HomeScreen from "../Screens/HomeScreen";
import Employee from "../Screens/Employee";
import Projects from "../Screens/Projects";
import Register from "../Screens/Register";
import Login from "../Screens/Login";

const Navbar = (exports) => {
  return (
    <NativeRouter>
      <View>
        <Switch>
          <Route path="/" exact component={HomeScreen} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </View>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e4bef",
    position: "absolute",
    bottom: "0",
  },
});

export default Navbar;
