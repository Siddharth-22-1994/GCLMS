import { PieChart, Pie, Cell } from "recharts";
import StatsCard from "./StatsCard";
import "./Dashboard.css";

const data = [
  { name: "Easy", value: 120, color: "#4CAF50" },
  { name: "Medium", value: 100, color: "#FFC107" },
  { name: "Difficult", value: 30, color: "#F44336" },
];

function SolvedQuestions() {
  return (
    <StatsCard title="Solved Questions">
      <PieChart width={200} height={200}>
        <Pie data={data} dataKey="value" outerRadius={80}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
    </StatsCard>
  );
}

export default SolvedQuestions;
