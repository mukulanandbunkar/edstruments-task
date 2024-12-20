import React from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

function Button(props) {
  const { children, className, variant, disabled } = props;

  const classes = clsx(styles["base-button"], className, {
    [styles.primary]: variant === "primary",
    [styles.secondary]: variant === "secondary",
    [styles.success]: variant === "success",
  });
  return (
    <button
      style={{ opacity: disabled ? 0.5 : 1 }}
      {...props}
      className={classes}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  variant: "primary",
};

export default Button;
