import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart({ sectorNames, sectorCounts }) {
  const data = {
    labels: sectorNames,
    datasets: [
      {
        data: sectorCounts,
        backgroundColor: "#800000",
      },
    ],
  };

  const options = {
    legend: {
      position: "right",
      onClick: null,
    },
  };

  return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;
