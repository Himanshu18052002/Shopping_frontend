import React from "react";
import icon from "../Assets/Icon.png";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartFlatbed } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <nav className="nav_container">
      <div className="nav_item_container">
        <img src={icon} alt="Company logo" />
        <div className="nav_input">
          <input type="text" placeholder="Search Items..." />
        </div>
        <ul>
          <li className="bounce-icon">
            <FontAwesomeIcon size="lg" icon={faUser} color="black" />
            <p>User</p>
          </li>
          <li className="bounce-icon">
            <FontAwesomeIcon size="lg" icon={faCartFlatbed} color="black" />
            <p>cart</p>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
