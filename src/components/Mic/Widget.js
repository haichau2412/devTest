import React from "react";
import Microphone from "./WidgetElements/Microphone";
import styles from "../../assets/css/Body-widgets.module.css";
import AdditionCustom from "./WidgetElements/AdditionCustom";
import SlideTone from "./WidgetElements/SlideTone";
import Enhancement from "./WidgetElements/Enhancement";
const Widget = () => {
  return (
    <div className={`${styles["body-widgets"]} flex`}>
      <Microphone />
      <AdditionCustom>
        <SlideTone />
        <Enhancement />
      </AdditionCustom>
    </div>
  );
};

export default Widget;
