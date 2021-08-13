import React, { useState,} from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const AddProject = (props) => {
  const [projectName, setProjectName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [projectCode, setProjectCode] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const projectData = {
      Project_name: projectName,
      Start_date: startDate,
      Planned_end_date: endDate,
      Description: description,
      Project_code: projectCode
    };
    props.onSaveProjectData(projectData);
    props.closeHandler();
    setProjectName('');
    setStartDate('');
    setEndDate('');
    setDescription('');
    setProjectCode('');
  };

  const projectNameHandler = (enteredText) => {
    setProjectName(enteredText);
  };
  const startDateHandler = (enteredText) => {
    setStartDate(enteredText);
  };
  const endDateHandler = (enteredText) => {
    setEndDate(enteredText);
  };
  const descriptionHandler = (enteredText) => {
    setDescription(enteredText);
  };
  const projectCodeHandler = (enteredText) => {
    setProjectCode(enteredText);
  };

  return (
    <View style={styles.addProject}>
      <Button onPress={props.closeHandler} title="close" />
      <View style={styles.TextInput}>
        <Text style={styles.label}>Project Name</Text>
        <TextInput
          style={styles.input}
          value={projectName}
          onChangeText={projectNameHandler}
        />
        <Text style={styles.label}>Start Date</Text>
        <TextInput
          style={styles.input}
          value={startDate}
          onChangeText={startDateHandler}
        />
        <Text style={styles.label}>End Date</Text>
        <TextInput
          style={styles.input}
          value={endDate}
          onChangeText={endDateHandler}
        />
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={descriptionHandler}
        />
        <Text style={styles.label}>Project Code</Text>
        <TextInput
          style={styles.input}
          value={projectCode}
          onChangeText={projectCodeHandler}
        />
      </View>
      <Button title="add project" onPress={submitHandler}/>
    </View>
  );
};

const styles = StyleSheet.create({
  addProject: {
    position: "absolute",
    top: 20,
    zIndex: 10,
    width: "100%",
    backgroundColor: "black",
    padding: 20,
    borderRadius: 10,
  },
  label: {
    fontSize: 20,
    color: "#ffffff",
  },
  input: {
    color: "#ffffff",
    borderColor: "#ffffff",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  },
});

export default AddProject;
