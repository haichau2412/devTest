import React from "react";
import Nav from "./Nav";
import UserAvatar from "./UserAvatar";

const Header = () => {
  return (
    <div className='nav-tabs flex'>
      <Nav />
      <UserAvatar />
    </div>
  );
};

export default Header;
