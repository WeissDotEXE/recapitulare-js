import React, { useEffect, useState, useCallback, Fragment } from "react";
import styles from "../Styles/Projects.module.scss";
import Table from "../Table/Table";
import AddProject from "../PostComponents/AddProject";
import RestrictedPage from "../RestrictedPage/RestrictedPage";
import EmptyList from "../EmptyList/EmptyList";
//import for redux
import { useSelector } from "react-redux";
const Projects = (props) => {
  const [project, setProject] = useState([]);
  const [projectPost, setProjectPost] = useState();
  const [isEmpty, setIsEmpty] = useState(true);
  const [error, setError] = useState(null);
  const [showAdd, setShowAdd] = useState(false);

  //variable used for userStatus (from redux store)
  const userStatus = useSelector((state) => state.userStatus);

  //getting data(projects) from server
  const fetchProjectHandler = useCallback(async () => {
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
      // setProject(transformedProject);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchProjectHandler();
  }, [fetchProjectHandler]);

  const closeAddHandler = () => {
    setShowAdd(false);
  };

  //post function (sending project data to back-end)
  async function postProjectHandler(projectPost) {
    try {
      const response = await fetch("http://localhost:4000/projects/", {
        method: "POST",
        body: JSON.stringify(projectPost),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      fetchProjectHandler();
    } catch {
      setError(error.message);
    }
  }

  //conditional rendering for empthy list of projects
  if (project.length !== 0) {
    setIsEmpty(false);
  }

  //handler for deleting a project
  const deleteHandler = async (id) => {
    try {
      const response = await fetch(`http://localhost:4000/projects/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
      fetchProjectHandler();
    } catch {
      setError(error.message);
    }
  };

  //uplifting state from addProject
  //which will be sent to back-end
  const saveProjectDataHandler = (enteredData) => {
    setProjectPost(enteredData);
    postProjectHandler(enteredData);
    console.log(enteredData);
  };

  let content = null;

  const showAddHandler = () => {
    setShowAdd(true);
  };

  //conditional rendering if user is logged
  if (!userStatus) {
    content = (
      // <Fragment>
      //   {showAdd && (
      //     <AddProject
      //       closeHandler={closeAddHandler}
      //       postHandler={postProjectHandler}
      //       onSaveProjectData={saveProjectDataHandler}
      //     />
      //   )}
      //   {isEmpty ? (
      //     <EmptyList showAdd={showAddHandler} />
      //   ) : (
          <Fragment>
            <button onClick={() => setShowAdd(true)}>Add new Project</button>
            <Table
              page="projects"
              project={project}
              deleteItem={deleteHandler}
            />
          </Fragment>
      //   )}
      //   )
      // </Fragment>
    );
  } else {
    content = <RestrictedPage />;
  }

  //what is rendered on website
  return <Fragment>{content}</Fragment>;
};

export default Projects;
