import React from "react";
import Widget from "../../components/Mic/Widget";
import ProfileBar from "../../components/Mic/ProfileBar/ProfileBar";

const Body = () => {
  return (
    <div className='body-wrapper scrollable'>
      <ProfileBar />
      <Widget />
    </div>
  );
};

export default Body;
