import React, { useEffect, useState, useCallback, Fragment } from "react";
import styles from "../Styles/Projects.module.scss";
import Table from "../Table/Table";
import AddProject from "../PostComponents/AddProject";
import RestrictedPage from "../RestrictedPage/RestrictedPage";
import UpdateProject from "./UpdateProject";
import EmptyList from "../EmptyList/EmptyList";
//import for redux
import { useSelector } from "react-redux";
const Projects = (props) => {
  const [project, setProject] = useState([]);
  const [projectPost, setProjectPost] = useState();
  const [isEmpty, setIsEmpty] = useState(true);
  const [error, setError] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  //variable used for userStatus (from redux store)
  const userStatus = useSelector((state) => state.status);

  //getting data(projects) from server
  const fetchProjectHandler = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:4000/projects");
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

  let pageContent = null;
  let table = <Table
  page="projects"
  project={project}
  deleteItem={deleteHandler}
/>;

  const showAddHandler = () => {
    setShowAdd(true);
  };

  const closeHandler=()=>{
    setShowAdd(false);
  }

  //conditional rendering if user is logged
  // if (userStatus) {
  //   pageContent = (
  //     <Fragment>
  //       {showAdd && (
  //         <AddProject
  //           onSaveEmployeeData={saveProjectDataHandler}
  //           closeHandler={closeHandler}
  //           postHandler={postProjectHandler}
  //           onSaveProjectData={saveProjectDataHandler}
  //         />
  //       )}
  //       {showUpdate && <UpdateProject project={project} />}
        
  //       {isEmpty && table}
  //     </Fragment>
  //   );
  // } else {
  //   pageContent = <RestrictedPage />;
  // }
  if (userStatus) {
    pageContent = (
      <Fragment>
        {showAdd && (
          <AddProject
            onSaveProjectData={saveProjectDataHandler}
            closeHandler={closeHandler}
            postHandler={postProjectHandler}
          />
        )}
        {showUpdate && (
          <UpdateProject closeHandler={closeHandler} project={project} />
        )}
        <button onClick={() => setShowAdd(true)}>Add Project</button>
        {isEmpty && table}
      </Fragment>
    );
  } else {
    pageContent = <RestrictedPage />;
  }

  //what is rendered on website
  return <Fragment>{pageContent}</Fragment>;
};

export default Projects;
