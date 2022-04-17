import React from "react";
import headerLogo from "./imgs/logo.svg";
import filterIcon from "./imgs/filter.svg";
import "./baseStyles.css";
import { Link } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("token");
  return (
    <div className="header">
      <img className="headerLogo" src={headerLogo} />
      {token && (
        <ul className="header_text_cont">
          <Link to="/list">
            <li className="header_text">JOGS</li>
          </Link>
          <Link to="/info">
            <li className="header_text">INFO</li>
          </Link>
          <li className="header_text">CONTACT US</li>
          <li className="header_text">
            <img src={filterIcon} />
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
