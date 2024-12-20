import React, { useEffect } from "react";
import styles from "./TaskContainer.module.css";
import TaskWrapper from "../../Molecule/TaskWrapper/TaskWrapper";
import TaskForm from "../../Molecule/TaskForm/TaskForm";
import { useNavigate, useParams } from "react-router-dom";

function TaskContainer() {
  const currentUser = localStorage.getItem("current-user");
  const { userName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if(userName !== currentUser) {
      localStorage.removeItem("current-user")
    }
    if (!currentUser || userName !== currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate, userName]);


  return (
    <div className={styles["task-container"]}>
      <TaskForm />
      <TaskWrapper />
    </div>
  );
}

export default TaskContainer;
