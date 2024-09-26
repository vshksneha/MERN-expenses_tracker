import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Chart as ChartJS, LineElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineController } from "chart.js";
import { Line } from 'react-chartjs-2';
import { listTransactionsAPI } from "../../services/transactions/transactionService";

ChartJS.register(LineElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineController);

const TransactionChart = () => {
  const {
    data: transactions,
    isError,
    isLoading,
    isFetched,
    error,
    refetch,
  } = useQuery({
    queryFn: listTransactionsAPI,
    queryKey: ["list-transactions"],
  });

  //! calculate total income and expense
  const totals = transactions?.reduce(
    (acc, transaction) => {
      if (transaction?.type === "income") {
        acc.income += transaction?.amount;
      } else {
        acc.expense += transaction?.amount;
      }
      return acc;
    },
    { income: 0, expense: 0 }
  );

  //! Data structure for the chart
  const data = {
    labels: transactions?.map((transaction) => transaction?.date), // assuming transactions have a date field
    datasets: [
      {
        label: "Income",
        data: transactions?.filter(t => t.type === 'income').map(t => t.amount),
        borderColor: "#36A2EB",
        backgroundColor: "#36A2EB",
        fill: false,
        tension: 0.1,
      },
      {
        label: "Expense",
        data: transactions?.filter(t => t.type === 'expense').map(t => t.amount),
        borderColor: "#FF6384",
        backgroundColor: "#FF6384",
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          padding: 25,
          boxWidth: 12,
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "Income vs Expense Over Time",
        font: {
          size: 18,
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Date",
        },
      },
      y: {
        title: {
          display: true,
          text: "Amount",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-purple-200 min-h-screen py-10">
      <div className="my-8 p-6 bg-white rounded-lg shadow-xl border border-black" style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
        <h1 className="text-2xl font-bold text-center mb-6">
          Transaction Overview
        </h1>
        <div style={{ height: "350px"}}>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default TransactionChart;
