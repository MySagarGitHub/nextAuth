"use client";
import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const [activeUsers, setActiveUsers] = useState(1234);
  const [totalRevenue, setTotalRevenue] = useState(45678);

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Users',
        data: [1200, 1900, 3000, 5000, 4000, 3000],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500">Active Users</h2>
          <p className="text-2xl font-bold">{activeUsers}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500">Total Revenue</h2>
          <p className="text-2xl font-bold">${totalRevenue}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-gray-500">Conversion Rate</h2>
          <p className="text-2xl font-bold">2.4%</p>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-bold mb-4">User Growth</h2>
        <Line data={chartData} />
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center justify-between border-b pb-2">
              <div>
                <p className="font-medium">New user signed up</p>
                <p className="text-sm text-gray-500">2 minutes ago</p>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                New
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
