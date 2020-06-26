import React, { useState } from "react";
import styles from "../../../assets/css/Body-widgets.module.css";
import Slider from "./Slider";

const MicVolume = () => {
  const [isDisable, setIsDisable] = useState(false);

  return (
    <>
      <div className={styles.title}>
        microphone
        <div
          onClick={() => setIsDisable((pre) => !pre)}
          className={`switch ${isDisable ? "" : "on"} switch-slider`}
          id='swPhone'
        >
          <div className='handle'></div>
        </div>
      </div>

      <div className={`${styles["h2-title"]}`}>mic volume</div>
      <Slider id='slPhone' isDisable={isDisable} />
    </>
  );
};

export default MicVolume;
