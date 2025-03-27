import React from "react";
import "./Dashboard.css";

import {
  FaHome,
  FaBook,
  FaTasks,
  FaCode,
  FaClipboardList,
  FaBrain,
  FaCalendarAlt,
  FaStickyNote,
  FaProjectDiagram,
  FaBriefcase,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img
          src="./Image/logo.png"
          alt="Logo"
          className="logo-img"
          style={{
            borderRadius: "50%",
            width: "70%",
            height: "auto",
            position: "relative",
            top: "-15px",
          }}
        />
        {/* <span>Greatcoder</span> */}
      </div>

      <nav className="nav">
        <div className="nav-section">
          <p className="nav-header">Overview</p>
          <a href="#" className="nav-item active">
            <FaHome className="icon" /> Dashboard
          </a>
        </div>

        <div className="nav-section">
          <p className="nav-header">Academic</p>
          <a href="#" className="nav-item">
            <FaBook className="icon" /> Courses
          </a>
        </div>

        <div className="nav-section">
          <p className="nav-header">Practice</p>
          <a href="#" className="nav-item">
            <FaTasks className="icon" /> MCQ
          </a>
          <a href="#" className="nav-item">
            <FaCode className="icon" /> Coding Problem
          </a>
          <a href="#" className="nav-item">
            <FaClipboardList className="icon" /> Coding Assessment
          </a>
        </div>

        <div className="nav-section">
          <p className="nav-header">My Activity</p>
          <a href="#" className="nav-item">
            <FaBrain className="icon" /> Problem Solving
          </a>
          <a href="#" className="nav-item">
            <FaCalendarAlt className="icon" /> Attendance
          </a>
        </div>

        <div className="nav-section">
          <p className="nav-header">Resources</p>
          <a href="#" className="nav-item">
            <FaStickyNote className="icon" /> Notes
          </a>
          <a href="#" className="nav-item">
            <FaProjectDiagram className="icon" /> Projects
          </a>
        </div>

        <div className="nav-section">
          <p className="nav-header">Careers</p>
          <a href="#" className="nav-item">
            <FaBriefcase className="icon" /> Jobs
          </a>
        </div>

        <div className="nav-section">
          <a href="#" className="nav-item">
            <FaCog className="icon" /> Settings
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
