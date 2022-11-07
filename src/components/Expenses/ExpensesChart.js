import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", Value: 0 },
    { label: "Feb", Value: 0 },
    { label: "Mar", Value: 0 },
    { label: "Apr", Value: 0 },
    { label: "Jun", Value: 0 },
    { label: "Jul", Value: 0 },
    { label: "Aug", Value: 0 },
    { label: "Sep", Value: 0 },
    { label: "Oct", Value: 0 },
    { label: "Nov", Value: 0 },
    { label: "Dec", Value: 0 },
  ];

  for (const expense of props.expensesForAYear) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].Value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
