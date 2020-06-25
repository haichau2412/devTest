import React from "react";

const Nav = () => {
  return (
    <>
      <div className='nav arrow back'></div>
      <div className='nav arrow forward disabled'></div>
      <a className='nav' href='./sound.html'>
        sound
      </a>
      <a className='nav' href='./mixer.html'>
        mixer
      </a>
      <a className='nav' href='./enhancement.html'>
        enhancement
      </a>
      <a className='nav' href='./eq.html'>
        eq
      </a>
      <a className='nav active' href='./mic.html'>
        mic
      </a>
      <a className='nav' href='./lighting.html'>
        lighting
      </a>
      <a className='nav' href='./power.html'>
        power
      </a>
    </>
  );
};

export default Nav;
