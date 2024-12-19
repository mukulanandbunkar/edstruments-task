import React, { useState } from "react";
import styles from "./TaskForm.module.css";
import { taskForm } from "../../../services/form.services";
import Input from "../../Atoms/Input/Input";
import Button from "../../Atoms/Button/Button";
import { connect } from "react-redux";
import { setTaskList } from "../../../services/Reducer/task";
import { useParams } from "react-router-dom";
import dataServices from "../../../services/data.services";
import { FaChevronDown } from "react-icons/fa";

function TaskForm(props) {
  const { userName } = useParams();
  const { updateTaskList } = dataServices;
  const { setTaskList, taskList } = props;
  const [task, setTask] = useState({
    name: "",
    completed: false,
  });
  const [error, setError] = useState(false);

  const onTaskSet = (event) => {
    let val = event.target.value;
    if (event.target.name === "completed") {
      val = JSON.parse(val);
    }
    setTask({
      ...task,
      [event.target.name]: val,
    });
  };

  const onTaskSubmit = (event) => {
    event.preventDefault();

    try {
      if (task.name.trim() === "") {
        setError(true);
        return;
      } else {
        setError(false);
      }
      const current = { ...task, id: new Date().toISOString() };
      const updatedList = [current, ...taskList];
      setTaskList(updatedList);
      updateTaskList(userName, updatedList);
    } finally {
      setTask({
        name: "",
        completed: false,
      });
    }
  };
  return (
    <div className={styles["task-form"]}>
      <h2 className={styles["task-form__heading"]}>Create a New Task</h2>
      <p className={styles["task-form__description"]}>
        Add a task to your list and mark it as completed or not completed. You
        can manage your tasks efficiently from here.
      </p>
      <form className={styles["task-form__form"]}>
        <Input
          onChange={onTaskSet}
          value={task.name}
          className={styles["task-form__input"]}
          {...taskForm}
          placeholder="Enter task title"
          isError={error}
        />
        <div className={styles["header__dropdown-container"]}>
          <select
            value={task.completed}
            onChange={onTaskSet}
            name="completed"
            className={styles["task-form__select"]}
          >
            <option value={true} className={styles["task-form__option"]}>
              Completed
            </option>
            <option value={false} className={styles["task-form__option"]}>
              Not Completed
            </option>
          </select>
          <FaChevronDown className={styles["header__dropdown-icon"]} />
        </div>
      </form>
      <Button onClick={onTaskSubmit} type="submit" variant="success">
        Create Task
      </Button>
    </div>
  );
}

const mapsStateToProps = (state) => ({
  taskList: state.task.taskList,
});

const mapsDispatchToProps = (dispatch) => ({
  setTaskList: (data) => dispatch(setTaskList(data)),
});

const connector = connect(mapsStateToProps, mapsDispatchToProps);

export default connector(TaskForm);
