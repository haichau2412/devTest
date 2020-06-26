import React, { useState } from "react";
import styles from "../../../assets/css/Body-widgets.module.css";
import Slider from "./Slider";

const MicSensitive = () => {
  const [isDisable, setIsDisable] = useState(false);

  return (
    <>
      <div className={`${styles["h2-title"]} mt20`}>
        mic sensitivity
        <div
          onClick={() => setIsDisable((pre) => !pre)}
          className={`switch ${isDisable ? "" : "on"} switch-slider`}
          id='swSensi'
        >
          <div className='handle'></div>
        </div>
      </div>
      <div className={`${styles["h2-body"]}`}>
        Adjust this setting to remove unwanted background noise or increase the
        amount of mic output heard
      </div>
      <Slider id='slSensi' isDisable={isDisable} />
    </>
  );
};

export default MicSensitive;
