import React, { useState, useRef, useEffect, useCallback } from "react";
import styles from "../../../assets/css/Body-widgets.module.css";
const Slider = ({
  title,
  id,
  min = 10,
  max = 100,
  step = 1,
  isDisable = false,
}) => {
  const [value, setValue] = useState(min);
  const [pointerPosition, setPointerPosition] = useState(0);
  const [valueAsWidth, setValueAsWidth] = useState(0);
  const inputRef = useRef();
  const pointerRef = useRef();

  const handleUpdateValue = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    function handleUpdateSlider() {
      let valueAsPercent = (value - min) / (max - min);
      let maxValueAsWidth = inputRef.current.getBoundingClientRect().width;
      let valueAsWidth = valueAsPercent * (maxValueAsWidth - 16) + 8;
      let pointerSize = pointerRef.current.getBoundingClientRect().width;
      let pointerPosition =
        valueAsPercent * (maxValueAsWidth - 16) - pointerSize / 2 + 8;
      setPointerPosition(pointerPosition);
      setValueAsWidth(valueAsWidth);
    }
    handleUpdateSlider();
  }, [inputRef, min, max, value]);

  useEffect(() => {
    inputRef.current.disabled = isDisable;
  }, [isDisable, inputRef]);
  return (
    <>
      {title ? <div class={styles["h2-title"]}>{title}</div> : null}
      <div className={`slider-container ${isDisable ? "" : "on"}`} id={id}>
        <div className='foot min'>low</div>
        <div className='foot mid'>medium</div>
        <div className='foot max'>high</div>
        <div className='left' style={{ width: `${valueAsWidth}px` }}></div>
        <div className='track'></div>
        <div
          className='slider-tip'
          ref={pointerRef}
          style={{ left: pointerPosition }}
        >
          {value}
        </div>
        <input
          ref={inputRef}
          type='range'
          min={min}
          max={max}
          value={value}
          step={step}
          className='slider'
          onChange={handleUpdateValue}
        />
      </div>
    </>
  );
};

export default Slider;
