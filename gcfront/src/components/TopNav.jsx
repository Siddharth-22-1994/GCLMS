import React, { useState } from "react";
import { FaSearch, FaBars, FaBell, FaCog } from "react-icons/fa";
import "./Dashboard.css";
import ProfileForm from "./ProfilePopup";

const TopNav = ({ toggleSidebar }) => {
  const [isFormOpen, setFormOpen] = useState(false);

  return (
    <div className="top-nav">
      <div className="left">
        <FaBars className="menu-icon" onClick={toggleSidebar} />
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="right">
        <div className="notification">
          <FaBell className="bell-icon" />
        </div>
        <FaCog className="settings-icon" />

        <div className="profile">
          <img src="./Image/bird.jpg" alt="Profile" className="profile-pic" />
          <div className="user-info" onClick={() => setFormOpen(true)}>
            <span className="role">Student</span>
            <span className="name">Vaibhav Paliwal</span>
          </div>
        </div>
      </div>

      <ProfileForm isOpen={isFormOpen} onClose={() => setFormOpen(false)} />
    </div>
  );
};

export default TopNav;
