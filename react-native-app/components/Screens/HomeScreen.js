import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.navbar}>
      <Button title="Home"/>
      <Button title="Home"/>
      <Button title="Home"/>
    </View>
  );
};

const styles=StyleSheet.create({
  navbar:{
    position: 'absolute',
  bottom:0,
    flexDirection:'row'
  }
})
export default HomeScreen;
