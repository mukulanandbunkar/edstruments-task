import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styles from "./Login.module.css";
import Card from "../../Atoms/Card/Card";
import Button from "../../Atoms/Button/Button";
import Input from "../../Atoms/Input/Input";
import { userForm } from "../../../services/form.services";

function Login() {
  const navigate = useNavigate();
  const [formVal, setFormVal] = useState({
    email: "",
    password: "",
  });

  const onInputChange = (event) => {
    setFormVal({
      ...formVal,
      [event.target.name]: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const user = formVal.email.split("@")[0];
    localStorage.setItem("current-user", user);
    navigate(`/tasks/${user}`);
  };

  const currentUser = localStorage.getItem("current-user");
  useEffect(() => {
    if (currentUser) {
      navigate(`/tasks/${currentUser}`);
    }
  }, []);

  return (
    <div className={styles["login-container"]}>
      <div className={styles["intro-description"]}>
        <h1>Welcome to Task Manager</h1>
        <p>
          Get started by logging into your account to manage your tasks
          efficiently. You can track your progress, complete tasks, and much
          more!
        </p>
      </div>

      <Card>
        <h2>Login to Your Account</h2>
        <form onSubmit={onFormSubmit} className={styles["login-form"]}>
          {userForm.map((input) => (
            <Input
              key={input.name}
              onChange={onInputChange}
              {...input}
            />
          ))}
          <Button variant="secondary" type="submit">
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default Login;
