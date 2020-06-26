import React, { useState } from "react";
import Slider from "./Slider";

const EnhancementSlider = ({ id, title, sliderID }) => {
  const [isDisable, setIsDisable] = useState(true);

  return (
    <>
      <div className='check-item'>
        <input
          type='checkbox'
          id={id}
          name={sliderID}
          onClick={() => setIsDisable((pre) => !pre)}
        />
        <label htmlFor={id} className='check-box'>
          <div className='check-text'>{title}</div>
        </label>
      </div>
      <Slider id={sliderID} isDisable={isDisable} />
    </>
  );
};

export default EnhancementSlider;
