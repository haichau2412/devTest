import React from "react";
import styles from "../../../assets/css/Body-widgets.module.css";
import EnhancementSlider from "./EnhancementSlider";

const Enhancement = () => {
  return (
    <div className={`${styles.widget} ${styles.micEnhance}`}>
      <div className={styles.help}></div>
      <div className={styles.tip}>
        I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just a
        tooltip. I'm just a tooltip.
      </div>
      <div className={styles.title}>enhancements</div>

      <EnhancementSlider
        id='checkNorm'
        title='Volume Normalization'
        idSlider='slNorm'
      />
      <EnhancementSlider
        id='checkAmb'
        title='Ambient Noise Reduction'
        idSlider='slAmb'
      />
      <EnhancementSlider
        id='checkClarity'
        title='Voice Clarity'
        idSlider='slClarity'
      />
    </div>
  );
};

export default Enhancement;
