import React from "react";
import { FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { FaRocketchat } from "react-icons/fa";

import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        <FaHome className="large-icon" />
      </Link>
      <IoMdSettings className="large-icon" />
      <IoMdNotifications className="large-icon" />
      <Link to="../chat">
        <FaRocketchat className="large-icon" />
      </Link>
    </div>
  );
};

export default NavIcons;
