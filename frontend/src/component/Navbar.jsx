import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";

export const Navbar = () => {
  const activeStyle = {
    textDecoration: "none",
    fontSize: "30px",
    color: "white",
  };
  const unactiveStyle = {
    textDecoration: "none",
    fontSize: "20px",
    color: "#33D1F4",
  };

  return (
    <div className={styles.navcontainer}>
      <div>
        <NavLink
          to="/profile"
          style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
        >
          My Profile
        </NavLink>
      </div>
      
        {/* <div>
          <NavLink
            to="/habit"
            style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          >
            Habbits
          </NavLink>
        </div> */}
        
        <div>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          >
            SignUp
          </NavLink>
          </div>
          <div>
          <NavLink
            to="/login"
            style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}
          >
            Login
          </NavLink>
        </div>
     
    </div>
  );
};