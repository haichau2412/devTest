import React from "react";
import styles from "../../../assets/css/Body-widgets.module.css";

const AdditionCustom = ({ children }) => {
  return (
    <div className={`${styles["widget-col"]} col-right flex`}>{children}</div>
  );
};

export default AdditionCustom;
