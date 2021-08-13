import React,{useState} from "react";
// import {
//   Button,
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   FlatList,
//   TouchableHighlight,
//   ScrollView,
//   StatusBar
// } from "react-native";

// const ProjectItem = (props) => {
//   return(
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//             <Text style={styles.innerText}>{props.name}</Text>
//             <Text>{props.description}</Text>
//             <Button title="test"/>
          
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({
//   container:{
//     height:100,
//     backgroundColor:'grey',
//     margin:10
//   },
//   projectItem: {
//     backgroundColor: "#0e4bef",
//     padding: 10,
//     margin: 10,
//     flexDirection: "column",
//     borderRadius: 10,
//   },
//   innerText: {
//     color: "red",
//     fontSize: 20,
//   },
// });

import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const ProjectItem = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Button title="test"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ProjectItem;
