import React from "react";
import "./Dashboard.css";

const StatsCard = ({ title, children }) => {
  return (
    <div className="stats-card">
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default StatsCard;
