import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  const { children } = props;
  return <div className={styles["card-layout"]}>{children}</div>;
}

export default Card;
