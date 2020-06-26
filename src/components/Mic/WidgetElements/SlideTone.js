import React, { useState } from "react";
import styles from "../../../assets/css/Body-widgets.module.css";
import Slider from "./Slider";

const SlideTone = () => {
  const [isDisable, setIsDisable] = useState(false);
  return (
    <div className={styles.widget} id='micSidetone'>
      <div className={styles.help}></div>
      <div className={styles.tip}>
        I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a
        tooltip. I'm just a tooltip.
      </div>
      <div className={styles.title}>
        sidetone
        <div
          onClick={() => setIsDisable((pre) => !pre)}
          className={`switch ${isDisable ? "" : "on"} switch-slider`}
          id='swSide'
        >
          <div className='handle'></div>
        </div>
      </div>
      <Slider id='slSide' min={0} isDisable={isDisable} />
    </div>
  );
};

export default SlideTone;
