import React from "react";
import styles from "./Header.module.css";
import Button from "../Atoms/Button/Button";
import { useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  const currentUser = localStorage.getItem("current-user");
  const onLogout = () => {
    localStorage.removeItem("current-user");
    navigate(`/login`);
  };
  return (
    <div className={styles["header"]}>
      <h2>Task Manager</h2>
      {currentUser && (
        <p className={styles["header__welcome-note"]}>
          Welcome <span>{currentUser} !!!</span>
        </p>
      )}
      {currentUser && (
        <Button variant="primary" onClick={onLogout}>
          Logout
        </Button>
      )}
    </div>
  );
}

export default Header;
