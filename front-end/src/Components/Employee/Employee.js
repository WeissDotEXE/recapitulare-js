import React, { useState, useEffect, useCallback, Fragment } from "react";

import styles from '../Styles/Employee.module.scss';
import AddEmployee from "../PostComponents/AddEmployee";
import Table from "../Table/Table";

const Employee = (props) => {
  const [employee, setEmployee] = useState([]);
  const [employeePost, setEmployeePost] = useState();
  const [isEmpty,setIsEmpty]=useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  //function for fetching employees and their data
  const fetchEmployeeHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:4000/employee");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedEmployees=[];
      
      for(const key in data){
        loadedEmployees.push({
          _id:key,
          name:data[key].name,
          adress:data[key].adress,
          email:data[key].email,
          hire_date:data[key].hire_date,
          salary:data[key].salary,
          job_title:data[key].job_title
        })
      }

      // const transformedEmployee = data.map((employeeData) => {
      //   return {
      //     id: employeeData._id,
      //     hire_date: employeeData.hire_date,
      //     name: employeeData.name,
      //     adress: employeeData.adress,
      //     email: employeeData.email,
      //     salary: employeeData.salary,
      //     job_title: employeeData.job_title,
      //   };
      // });
      setEmployee(loadedEmployees); //transformedEmployee
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  },[]);

  useEffect(() => {
    fetchEmployeeHandler();
  }, []);

  let content=<h1 id={styles.noEmployee_txt}>No employee yet...</h1>
  //condition for rendering different output if list of enployees is empty
  if(employee.length>0){
    content=<Table page="employees" employee={employee} />
  }

  //post function
  async function postEmployeeHandler(employeePost){
    try{
      const response = await fetch('http://localhost:4000/employee/',{
        method:'POST',
        body: JSON.stringify(employeePost),
        headers:{
          'Content-Type': 'application/json'
        }
      });
      const data=await response.json();
      console.log(data);
    }catch{
      setError(error.message);
    }
  }

  const saveEmployeeDataHandler = (enteredData) => {
    setEmployeePost(enteredData);
    postEmployeeHandler(enteredData);
    console.log(enteredData);
  };

  const closeAddHandler = () => {
    setShowAdd(false);
  };

  

  return (
    <Fragment>
      {showAdd && (
        <AddEmployee
          onSaveEmployeeData={saveEmployeeDataHandler}
          closeHandler={closeAddHandler}
          postHandler={postEmployeeHandler}
        />
      )}
      <button onClick={() => setShowAdd(true)}>Add Employee</button>
      {content}
    </Fragment>
  );
};

export default Employee;
