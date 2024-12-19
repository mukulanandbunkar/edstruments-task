import React from 'react'
import styles from "./TaskContainer.module.css"
import TaskWrapper from '../../Molecule/TaskWrapper/TaskWrapper';
import TaskForm from '../../Molecule/TaskForm/TaskForm';




function TaskContainer() {
  return (
    <div className={styles["task-container"]}>
    <TaskForm/>
    <TaskWrapper/>
    </div>
  )
}

export default TaskContainer