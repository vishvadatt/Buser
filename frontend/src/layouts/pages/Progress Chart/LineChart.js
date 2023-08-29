import React from "react";
import { Line } from "react-chartjs-2";
import PropTypes from "prop-types";

const LineChart = ({ labels, painLevelData, painDurationData, painFrequencyData }) => {
  const options = {
    responsive: true,
    //maintainAspectRatio:false
    plugins: {
      legend: true,
      tooltip: {
        enabled: false,
      },
      title: {
        display: true,
      },
    },
    scales: {
      x: {
        title: {
          text: "days",
          color: "Black",
          font: {
            size: 20,
          },
        },
      },
      // yAxes: {
      //     // ticks: {
      //     //     fontSize: 20,
      //     // }
      // },
      // pan: {
      //     enabled: true,
      //     mode: "xy"
      // },
      // zoom: {
      //     enabled: true,
      //     mode: "xy" // or 'x' for "drag" version
      // },
      Dateset1: {
        beginAtZero: false,
        type: "linear",
        position: "left",
        min: 0,
        max: 10,
        ticks: {
          color: "red",
        },
        title: {
          display: true,
          text: "Pain Level",
        },
      },
      Dateset2: {
        beginAtZero: false,
        type: "linear",
        position: "left",
        min: 1,
        max: 24,
        ticks: {
          color: "green",
        },
        title: {
          display: true,
          text: "Pain Duration (Hours)",
        },
      },
      Dateset3: {
        beginAtZero: false,
        type: "linear",
        position: "left",
        stepSize: 1, // Set step size to 1 to show all ticks
        min: 0,
        max: 3,
        ticks: {
          color: "purple",
          callback: (value) => {
            if (value === 3) return "Daily";
            if (value === 2) return "Weekly";
            if (value === 1) return "Monthly";
            if (value === 0) return "None";
            return ""; // Return empty string for other values
          },
        },
        title: {
          display: true,
          text: "Pain Frequency",
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Pain Level",
        data: painLevelData,
        borderColor: "red",
        backgroundColor: "orange",
        tension: 0.4,
        pointStyle: "star",
        pointBorderColor: "blue",
        yAxisID: "Dateset1",
      },
      {
        label: "Pain Duration (hours)",
        data: painDurationData,
        borderColor: "green",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.4,
        pointStyle: "rect",
        pointBorderColor: "Black",
        yAxisID: "Dateset2",
      },
      {
        label: "Pain Frequency",
        data: painFrequencyData,
        borderColor: "purple",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.4,
        pointStyle: "rect",
        pointBorderColor: "Black",
        yAxisID: "Dateset3",
      },
    ],
  };
  // console.log("graph", data);
  return <Line options={options} data={data} />;
};

LineChart.propTypes = {
  painDurationData: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
  labels: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
  painLevelData: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
  painFrequencyData: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
};

export default LineChart;
