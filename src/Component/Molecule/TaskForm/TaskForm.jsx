import React from "react";
import styles from "./TaskForm.module.css";
import { taskForm } from "../../../services/form.services";
import Input from "../../Atoms/Input/Input";
import Button from "../../Atoms/Button/Button";

function TaskForm() {
  return (
    <div className={styles["task-form"]}>
      <h2 className={styles["task-form__heading"]}>Create a New Task</h2>
      <p className={styles["task-form__description"]}>
        Add a task to your list and mark it as completed or not completed. You
        can manage your tasks efficiently from here.
      </p>
      <form className={styles["task-form__form"]}>
        <Input
          className={styles["task-form__input"]}
          {...taskForm}
          placeholder="Enter task title"
        />
        <select className={styles["task-form__select"]}>
          <option className={styles["task-form__option"]}>Completed</option>
          <option className={styles["task-form__option"]}>Not Completed</option>
        </select>
      </form>
      <Button variant="success">Create Task</Button>
    </div>
  );
}

export default TaskForm;
