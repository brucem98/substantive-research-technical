import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

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
    plugins: {
      datalabels: {
        textAlign: "center",
        color: "#000000",
        font: {
          weight: "bold",
          size: 16,
        },
        formatter: (value, context) => {
          const dataPoints = context.chart.data.datasets[0].data;
          const totalSum = dataPoints.reduce((a, b) => a + b, 0);
          const percentageValue = ((value / totalSum) * 100).toFixed(2);

          return `${percentageValue}%`;
        },
      },
      legend: {
        position: "right",
        onClick: null,
      },
    },
    legend: {
      position: "right",
      onClick: null,
    },
  };

  return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;
