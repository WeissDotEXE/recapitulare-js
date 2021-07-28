import React, { useState, useEffect, useCallback } from "react";
import Table from "../Table/Table";

const Employee = (props) => {
  const [employee, setEmployee] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
          hire_date: employee.hire_date,
          name: employeeData.name,
          adress: employeeData.adress,
          email: employeeData.email,
          salary: employeeData.salary,
          job_title: employeeData.job_title,
        };
      });
      setEmployee(transformedEmployee);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchEmployeeHandler();
    console.log(employee);
  }, [fetchEmployeeHandler]);

  return <Table page="employees" />;
};

export default Employee;
