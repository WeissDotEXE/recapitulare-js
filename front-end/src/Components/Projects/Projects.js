import React, { useEffect, useState, useCallback } from "react";
import Table from "../Table/Table";

const Projects = (props) => {
  const [project, setProject] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProjectHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:4000/projects");
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const transformedProject = data.map((projectData) => {
        return {
          id: projectData._id,
          projectName: projectData.Project_name,
          startDate: projectData.Start_date,
          plannedEndDate: projectData.Planned_end_date,
          description: projectData.Description,
          projectCode: projectData.Project_code,
        };
      });
      setProject(transformedProject);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProjectHandler();
    console.log(project);
  }, [fetchProjectHandler]);

  return <Table page="projects" />;
};

export default Projects;
