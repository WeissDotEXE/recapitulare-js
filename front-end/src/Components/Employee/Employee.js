import React, { useState, useEffect, useCallback, Fragment } from "react";

import styles from "../Styles/Employee.module.scss";
import AddEmployee from "../PostComponents/AddEmployee";
import Table from "../Table/Table";
import UpdateEmployee from "./UpdateEmployee";
import RestrictedPage from '../RestrictedPage/RestrictedPage';
//import for redux
import { useSelector } from "react-redux";
const Employee = (props) => {
  const [employee, setEmployee] = useState([]);
  const [employeePost, setEmployeePost] = useState();
  const [isEmpty, setIsEmpty] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  //userStatus with redux
  const userStatus = useSelector((state) => state.status);

  //variable for deciding which content will be rendered
  //page with employees/restricted page
  let pageContent = null;
  //condition which will be rendered
  //based on userStatus(redux)
  if(userStatus===true){
    pageContent=(<Fragment>
      {showAdd && (
        <AddEmployee
          onSaveEmployeeData={saveEmployeeDataHandler}
          closeHandler={closeHandler}
          postHandler={postEmployeeHandler}
        />
      )}
      {showUpdate && (
        <UpdateEmployee closeHandler={closeHandler} employee={employee} />
      )}
      <button onClick={() => setShowAdd(true)}>Add Employee</button>
      {table}
    </Fragment>);
  }else{
    pageContent=(
      <RestrictedPage />
    );
  }


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
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchEmployeeHandler();
  }, [fetchEmployeeHandler]);

  //function for selecting user
  const selectEmployee = () => {
    setShowUpdate(true);
  };

  //function for deleting an item from table(passing through props)
  const deleteHandler = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/employee/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
      fetchEmployeeHandler();
    } catch {
      setError(error.message);
    }
  };
  let table = (
    <Fragment>
      <Table
        page="employees"
        employee={employee}
        deleteItem={deleteHandler}
        show={selectEmployee}
      />
    </Fragment>
  );

  //post function
  async function postEmployeeHandler(employeePost) {
    try {
      const response = await fetch("http://localhost:4000/employees/", {
        method: "POST",
        body: JSON.stringify(employeePost),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      fetchEmployeeHandler();
    } catch (error) {
      setError(error.message);
    }
  }

  const saveEmployeeDataHandler = (enteredData) => {
    setEmployeePost(enteredData);
    postEmployeeHandler(enteredData);
    console.log(enteredData);
  };

  const closeHandler = () => {
    setShowAdd(false);
    setShowUpdate(false);
  };

  return (
    <Fragment>
      {pageContent}
    </Fragment>
  );
};

export default Employee;
