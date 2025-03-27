import React from "react";
import { FaSearch, FaBars, FaBell, FaCog } from "react-icons/fa";

const TopNav = () => {
  return (
    <div className="top-nav">
      <div className="left">
        <FaBars className="menu-icon" />
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="right">
        <div className="notification">
          <FaBell className="bell-icon" />
          {/* <span className="badge">12</span> */}
        </div>
        <FaCog className="settings-icon" />

        <div className="profile">
          <img src="./Image/bird.jpg" alt="Profile" className="profile-pic" />
          <div className="user-info">
            <span className="role">Student</span>
            <span className="name">Vaibhav Paliwal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
