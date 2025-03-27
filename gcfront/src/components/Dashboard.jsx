// import React from "react";
// import Sidebar from "./Sidebar";
// import SolvedQuestions from "./SolvedQuestions";
// import MCQStats from "./MCQStats";
// import Leaderboard from "./Leaderboard";
// import DiscussionGroup from "./DiscussionGroup";
// import PracticeMocks from "./PracticeMocks";
// import "./Dashboard.css";
// import { FaSignOutAlt } from "react-icons/fa";

// function Dashboard() {
//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="dashboard-content">
//         <header className="dashboard-header">
//           <h1>Welcome Back, Vaibhav Paliwal 👋</h1>
//           <button className="logout-btn">
//             <FaSignOutAlt /> Logout
//           </button>
//         </header>

//         <div className="dashboard-stats">
//           <SolvedQuestions />
//           <MCQStats />
//         </div>

//         <div className="dashboard-sections">
//           <Leaderboard />
//           <DiscussionGroup />
//         </div>

//         <PracticeMocks />
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import React from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import WelcomeBanner from "./WelcomeBanner";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, marginLeft: "250px" }}>
        <TopNav />
        <div style={{ marginTop: "70px", padding: "20px" }}>
          <WelcomeBanner />
          <h2>Dashboard Content</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
