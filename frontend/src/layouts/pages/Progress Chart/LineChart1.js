import React from "react";
import "./style.css";
import moment from "moment";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const LineChart1 = ({ labels, painLevelData, painDurationData, painFrequencyData }) => {
  const data = labels.map((date, index) => ({
    date: moment(date, "DD-MM-YYYY").format("DD-MM"),
    PainLevel: painLevelData[index],
    PainDuration: painDurationData[index],
    PainFrequency: painFrequencyData[index],
  }));

  const tooltipStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    border: "1px solid #fff",
    color: "#fff",
    padding: "5px",
    fontSize: "15px",
  };
  const xAxisLabelStyle = {
    fontSize: "14px",
  };

  const breakpoints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const breakP = [0, 1, 2, 3];
  const formatTick = (value) => {
    if (value === 3) {
      return "Daily";
    }
    if (value === 2) {
      return "Weekly";
    }
    if (value === 1) {
      return "Monthly";
    }

    return value;
  };
  return (
    <div className="chart-div">
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tick={{ style: xAxisLabelStyle }} />
          <YAxis yAxisId="painLevelData" ticks={breakpoints} domain={[0, 10]} />
          <YAxis yAxisId="painDurationData" domain={[0, 24]} orientation="left" />
          <YAxis
            yAxisId="painFrequencyData"
            ticks={breakP}
            tickFormatter={formatTick}
            orientation="left"
            angle={-90}
          />
          <Tooltip contentStyle={tooltipStyle} />
          <Legend />
          <Line
            type="monotone"
            dataKey="PainLevel"
            stroke="#7570c9"
            activeDot={{ r: 8 }}
            strokeWidth={3}
            yAxisId="painLevelData"
          />
          <Line
            type="monotone"
            dataKey="PainDuration"
            stroke="#e2af48"
            activeDot={{ r: 8 }}
            strokeWidth={3}
            yAxisId="painDurationData"
          />
          <Line
            type="monotone"
            dataKey="PainFrequency"
            stroke="#6eb98b"
            activeDot={{ r: 8 }}
            strokeWidth={3}
            yAxisId="painFrequencyData"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
LineChart1.propTypes = {
  painDurationData: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
  labels: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
  painLevelData: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
  painFrequencyData: PropTypes.oneOfType([PropTypes.array, PropTypes.func]).isRequired,
};
export default LineChart1;
