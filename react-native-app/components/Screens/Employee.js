import React, { useState, useCallback, useEffect, Fragment } from "react";
import { Button, StyleSheet, Text, View, Pressable } from "react-native";

const Employee = ({ history }) => {
  const [employee, setEmployee] = useState([]);
  const [employeePost, setEmployeePost] = useState();

  //fetch employee
  const fetchEmployeeHandler = useCallback(async () => {
    try {
      const response = await fetch("http://cbed8aacdd42.ngrok.io/employee");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const transformedEmployee = data.map((employeeData) => {
        return {
          id: employeeData._id,
          name: employeeData.name,
          adress: employeeData.adress,
          email: employeeData.email,
          hire_date: employeeData.hire_date,
          salary: employeeData.salary,
          job_title: employeeData.job_title,
        };
      });
      setEmployee(transformedEmployee); //loadedEmployees
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchEmployeeHandler();
  }, [fetchEmployeeHandler]);


  return (
    <Fragment>
      <View style={styles.navbar}>
        <Button title="Home" onPress={() => history.push("/")} />
        <Button title="Projects" onPress={() => history.push("/projects")} />
        <Button title="Employees" onPress={() => history.push("/employees")} />
      </View>
      <View style={styles.content}></View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: "30%",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 30,
    paddingTop: 20,
  },
  content:{
    backgroundColor:"#000"
  }
});
export default Employee;
