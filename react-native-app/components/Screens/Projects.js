import React, { useState, useCallback, useEffect } from "react";
import { Button, StyleSheet, Text, View, Pressable } from "react-native";

import ProjectItem from "../ItemList/ProjectItem";
import AddProject from "./AddProject";

const Projects = ({ history }) => {
  const [project, setProject] = useState([]);
  const [projectPost, setProjectPost] = useState();
  const [showAdd,setShowAdd]=useState(false);
  //fetching projects
  const fetchProjectHandler = async () => {
    try {
      const response = await fetch("http://cbed8aacdd42.ngrok.io/projects",{
        method:'GET',
        headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      //console.log(response.data);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      

      const transformedProjects = data.map((projectData) => {
        return {
          id: projectData._id,
          projectName: projectData.Project_name,
          startDate: projectData.Start_date,
          plannedEndDate: projectData.Planned_end_date,
          description: projectData.Description,
          projectCode: projectData.Project_code,
        };
      });
      setProject(transformedProjects);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjectHandler();
  }, []);

  let table = project.map((project) => {
    return (
      <ProjectItem
      key={project.id}
      name={project.projectName}
      startDate={project.startDate}
      endDate={project.endDate}
      description={project.description}
      projectCode={project.ProjectCode}
      />
    );
  });

  //post function (sending project data to back-end)
  async function postProjectHandler(projectPost) {
    try {
      const response = await fetch("http://cbed8aacdd42.ngrok.io/projects", {
        method: "POST",
        body: JSON.stringify(projectPost),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      fetchProjectHandler();
    } catch(error){
      console.log(error);
    }
  }

  const showAddHandler=()=>{
    setShowAdd(!showAdd);
  }

  //handler for uplifting data from ADD component
  const saveProjectHandler=(enteredData)=>{
    setProjectPost(enteredData);
    postProjectHandler(enteredData);
    console.log(projectPost);
  }
  return (
    <View>
      
      <View style={styles.navbar}>
        <Button title="Home" onPress={() => history.push("/")} />
        <Button title="Projects" onPress={() => history.push("/projects")} />
        <Button title="Employees" onPress={() => history.push("/employees")} />
        <Button title="Add" style={styles.addBtn} onPress={showAddHandler}/>
      </View>
      
      
      <View style={styles.table}>{table}</View>
      {showAdd && <AddProject closeHandler={showAddHandler} onSaveProjectData={saveProjectHandler}/>}
    </View>
  );
};
const styles = StyleSheet.create({
  navbar: {
    height: "40%",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 30,
    paddingTop: 20,
    zIndex:1
  },
  table:{
    flex:1,
    flexDirection:'column',
    zIndex:1
  },
  addBtn:{
    zIndex:1
  }
});
export default Projects;
