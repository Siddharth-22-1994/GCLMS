import StatsCard from "./StatsCard";
import "./Dashboard.css";

function Leaderboard() {
  return (
    <StatsCard title="Leaderboard">
      <ol>
        <li>Priya Kumari - 38,429 pts</li>
        <li>Durga Prasad - 45,073 pts</li>
        <li>Sam - 29,953 pts</li>
      </ol>
    </StatsCard>
  );
}

export default Leaderboard;
