import React, { useState } from "react";
import styles from "./TaskWrapper.module.css";
import EditModal from "../../Atoms/Modal/EditModal";
import Button from "../../Atoms/Button/Button";
import { FaCheck } from "react-icons/fa";
import { FaUndoAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

function TaskWrapper() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Sample Task 1", completed: false },
    { id: 2, name: "Sample Task 2", completed: true },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
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
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, name: newName } : task
      )
    );
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
        tasks.map((task) => (
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
        ))
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

export default TaskWrapper;
