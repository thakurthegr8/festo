import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarChart = (props) => {
  const data = {
    labels: props.labels,
    datasets: [
      { label: props.label, data: props.data, backgroundColor: "#1fb141" },
    ],
  };

  return <Bar data={data} />;
};
