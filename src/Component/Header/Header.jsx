import React from "react";
import styles from "./Header.module.css";
import Button from "../Atoms/Button/Button";
import { useNavigate } from "react-router";
import { setTaskList, setFilter } from "../../services/Reducer/task";
import { connect } from "react-redux";
import { FaChevronDown } from "react-icons/fa";

function Header(props) {
  const { setTaskList, filter, setFilter } = props;
  const navigate = useNavigate();
  const currentUser = localStorage.getItem("current-user");
  const onLogout = () => {
    localStorage.removeItem("current-user");
    setTaskList([]);
    setFilter("all");
    navigate("/login");
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className={styles["header"]}>
      <h2>Task Manager</h2>
      {currentUser && (
        <p className={styles["header__welcome-note"]}>
          Welcome <span>{currentUser} !!!</span>
        </p>
      )}
      <div className={styles["header__controls"]}>
        {currentUser && (
          <div style={{ display: "flex", gap: "8px" }}>
            <div className={styles["header__dropdown-container"]}>
              <select
                className={styles["header__dropdown"]}
                value={filter}
                onChange={handleFilterChange}
              >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
              </select>
              <FaChevronDown className={styles["header__dropdown-icon"]} />
            </div>
            <Button variant="primary" onClick={onLogout}>
              Logout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

const mapsStateToProps = (state) => ({
  taskList: state.task.taskList,
  filter: state.task.filter,
});

const mapsDispatchToProps = (dispatch) => ({
  setTaskList: (data) => dispatch(setTaskList(data)),
  setFilter: (data) => dispatch(setFilter(data)),
});

const connector = connect(mapsStateToProps, mapsDispatchToProps);

export default connector(Header);
