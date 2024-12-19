import React from "react";
import styles from "./Input.module.css";

function Input({ isError, ...props }) {
  return (
    <div>
      <input {...props} className={styles["input-field"]} />
      <p
        style={{ visibility: isError ? "visible" : "hidden" }}
        className={styles["input--error"]}
      >
        *field cannot be empty
      </p>
    </div>
  );
}

export default Input;
