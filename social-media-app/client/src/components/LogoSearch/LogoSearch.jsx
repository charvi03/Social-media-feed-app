import React from "react";

import "./LogoSearch.css";
import { FaSearch } from "react-icons/fa";
import { BiChurch } from "react-icons/bi";
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <BiChurch className="vlarge-icon" />
      <div className="Search">
        <input type="text" placeholder="#Search..." />
        <div>
          <FaSearch className="large-icon" />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
