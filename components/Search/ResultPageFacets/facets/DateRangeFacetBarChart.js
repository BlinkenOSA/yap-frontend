import React, {useState, useEffect} from "react";
import { Bar } from "react-chartjs-2";

const DateRangeFacetBarChart = ({data, highlight}) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
      setChartData(data.sort((a, b) => (a.text > b.text) ? 1 : -1));
    }, [data]);

    const calculateBackground = () => {
      const leftCount = chartData.find(d => parseInt(d.text) === highlight[0]);
      const rightCount = chartData.find(d => parseInt(d.text) === highlight[1]);

      if (leftCount && rightCount) {
        return (
          chartData.map(cd => (
            cd.text >= leftCount.text && cd.text <= rightCount.text ? "rgba(244, 88, 68, 0.4)" : "rgba(100, 122, 156, 0.4)"
          ))
        );
      } else {
         return []
      }
    };

    const barData = {
      labels: chartData.map((d) => d.text),
      datasets: [
        {
          backgroundColor: calculateBackground(),
          hoverBackgroundColor: "#3080ED",
          data: chartData.map((d) => d.count),
          barPercentage: 0.9,
          categoryPercentage: 1.0
        }
      ]
    };

    const options = {
      responsive: true,
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            display: false
          }
        ],
        yAxes: [
          {
            display: false,
            ticks: {
              min: 0
            }
          }
        ]
      }
    };
    return <Bar data={barData} options={options} />;
};

export default DateRangeFacetBarChart;
