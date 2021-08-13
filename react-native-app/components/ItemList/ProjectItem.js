import React,{useState} from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableHighlight,
  ScrollView,
  StatusBar
} from "react-native";

const ProjectItem = (props) => {
  return(
    <TouchableHighlight onLongPress={()=>props.deleteProject(props.id)}>
      <View style={styles.container}>
            <Text style={styles.innerText}>{props.name}</Text>
            <Text>{props.description}</Text>
            <Text>{props.startDate}</Text>
            <Text>{props.endDate}</Text>
            <Text>{props.projectCode}</Text>
            <Button style={styles.updateBtn} title="Update"/>
    </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  container:{
    height:160,
    backgroundColor:'gray',
    borderRadius:10,
    margin:10,
    padding:10
  },
  projectItem: {
    backgroundColor: "#0e4bef",
    padding: 10,
    margin: 10,
    flexDirection: "column",
    borderRadius: 10,
  },
  innerText: {
    color: "red",
    fontSize: 20,
  },
  updateBtn:{
    borderRadius:10
  }
});
export default ProjectItem;
