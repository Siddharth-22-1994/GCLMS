import React from "react";
import { FaTrophy, FaBookmark, FaCalendarCheck, FaFire } from "react-icons/fa";
import "./Dashboard.css";
const WelcomeBanner = () => {
  return (
    <div className="welcome-banner">
      <div className="banner-content">
        <div className="text-content">
          <p className="date">July 8, 2024</p>
          <h1 className="welcome-message">Welcome Back, Vaibhav Paliwal 👋</h1>
          <p className="subtext">
            See what’s happening with your courses and students.
          </p>

          <div className="stats">
            <div className="stat-box">
              <span className="stat-title">Courses</span>
              <span className="stat-value">23</span>
              <FaBookmark className="stat-icon" />
            </div>

            <div className="stat-box">
              <span className="stat-title">Attendance</span>
              <span className="stat-value green">78%</span>
              <FaCalendarCheck className="stat-icon" />
            </div>

            <div className="stat-box">
              <span className="stat-title">Rank</span>
              <span className="stat-value gold">66</span>
              <FaTrophy className="stat-icon" />
            </div>

            <div className="stat-box">
              <span className="stat-title">Points Earned</span>
              <span className="stat-value orange">82</span>
              <FaFire className="stat-icon" />
            </div>
          </div>
        </div>

        {/* <div className="banner-image">
          <img src="https://via.placeholder.com/400x250" alt="Dashboard" />
        </div> */}
      </div>
    </div>
  );
};

export default WelcomeBanner;
