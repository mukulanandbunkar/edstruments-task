import React, { useState, useEffect } from "react";
import styles from "./TaskWrapper.module.css";
import EditModal from "../../Atoms/Modal/EditModal";
import Button from "../../Atoms/Button/Button";
import { connect } from "react-redux";
import { FaCheck } from "react-icons/fa";
import { FaUndoAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { setTaskList } from "../../../services/Reducer/task";
import { useParams } from "react-router-dom";
import dataServices from "../../../services/data.services";

function TaskWrapper(props) {
  const { userName } = useParams();
  const { fetchTaskList, updateTaskList } = dataServices;
  const { taskList, setTaskList, filter } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const taskListAsPerUser = fetchTaskList(userName);
    if (taskListAsPerUser) {
      setTaskList(taskListAsPerUser);
      setTasks(taskListAsPerUser);
    }
  }, [userName, setTaskList, fetchTaskList]);

  useEffect(() => {
    if (filter !== "all") {
      const updatedList = taskList.filter((task) => {
        if (filter === "completed") {
          return task.completed;
        } else {
          return !task.completed;
        }
      });
      setTasks(updatedList);
    } else {
      setTasks(taskList);
    }
  }, [filter, taskList]);


  const deleteTask = (taskId) => {
    const updatedList = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedList);
    updateTaskList(userName, updatedList);
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedList = taskList.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedList);
    updateTaskList(userName, updatedList);
  };

  const openEditModal = (task) => {
    setCurrentTask(task);
    setIsEditing(true);
  };

  const closeEditModal = () => {
    setIsEditing(false);
    setCurrentTask(null);
  };

  const updateTaskName = (taskId, newName) => {
    const updatedList = taskList.map((task) =>
      task.id === taskId ? { ...task, name: newName } : task
    );
    setTaskList(updatedList);
    updateTaskList(userName, updatedList);
    closeEditModal();
  };

  return (
    <div className={styles["task-wrapper"]}>
      <h1 className={styles["task-wrapper__heading"]}>Task Management</h1>
      <p className={styles["task-wrapper__subheading"]}>
        Manage your tasks efficiently.
      </p>

      {tasks.length === 0 ? (
        <div className={styles["task-wrapper__empty"]}>
          <p>No tasks available. Start by adding a new task!</p>
        </div>
      ) : (
        <div style={{ maxHeight: "calc(100% - 112px)", overflow: "auto" }}>
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`${styles["task-wrapper__card"]} ${
                task.completed ? styles["task-wrapper__card--completed"] : ""
              }`}
            >
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "unset",
                }}
                className={styles["task-wrapper__name"]}
              >
                {task.name}
              </span>
              <div className={styles["task-wrapper__actions"]}>
                <Button
                  variant="secondary"
                  onClick={() => toggleTaskCompletion(task.id)}
                >
                  {task.completed ? <FaUndoAlt /> : <FaCheck />}
                </Button>
                <Button variant="secondary" onClick={() => openEditModal(task)}>
                  <MdModeEdit />
                </Button>
                <Button variant="primary" onClick={() => deleteTask(task.id)}>
                  <MdDelete />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {isEditing && (
        <EditModal
          task={currentTask}
          onClose={closeEditModal}
          onSave={(newName) => updateTaskName(currentTask.id, newName)}
        />
      )}
    </div>
  );
}

const mapsStateToProps = (state) => ({
  taskList: state.task.taskList,
  filter: state.task.filter,
});

const mapsDispatchToProps = (dispatch) => ({
  setTaskList: (data) => dispatch(setTaskList(data)),
});

const connector = connect(mapsStateToProps, mapsDispatchToProps);

export default connector(TaskWrapper);
