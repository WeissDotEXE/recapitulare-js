import React, { useEffect, useState, useCallback, Fragment } from "react";
import Table from "../Table/Table";
import AddProject from "../PostComponents/AddProject";
const Projects = (props) => {
  const [project, setProject] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

  const fetchProjectHandler = async () => {
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
  };

  useEffect(() => {
    fetchProjectHandler();
  }, []);

  const closeAddHandler=()=>{
    setShowAdd(false);
  }

  return (
    <Fragment>
      {showAdd && <AddProject closeHandler={closeAddHandler}/>}
      <button onClick={() => setShowAdd(true)}>Add new Project</button>
      <Table page="projects" project={project} />
      
    </Fragment>
  );
};

export default Projects;
