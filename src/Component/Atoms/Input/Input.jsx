import React from "react";
import styles from "./Input.module.css";

function Input(props) {
  return <input  {...props} className={styles["input-field"]} />;
}

export default Input;
