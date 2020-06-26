import React from "react";
import styles from "../../../assets/css/Body-widgets.module.css";
import MicSensitive from "./MicSensitive";
import MicVolume from "./MicVolume";

const Microphone = () => {
  return (
    <div className={`${styles["widget-col"]} col-left flex`}>
      <div className={styles.widget} id='micPhone'>
        <div className={styles.help}></div>
        <div className={styles.tip}>
          I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a
          tooltip. I'm just a tooltip.
        </div>
        <MicVolume />
        <MicSensitive />
      </div>
    </div>
  );
};

export default Microphone;
