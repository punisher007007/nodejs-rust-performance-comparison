import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PerformanceChart = () => {
  const data = [
    {
      name: 'Response Time',
      'Node.js': 100,
      'Rust': 17,
    },
    {
      name: 'CPU Usage',
      'Node.js': 100,
      'Rust': 35,
    },
    {
      name: 'Memory Usage',
      'Node.js': 100,
      'Rust': 30,
    },
  ];

  return (
    <div className="w-full h-96 bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4 text-center text-gray-800">Node.js vs Rust Performance Comparison</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'Relative Performance (%)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="Node.js" fill="#8884d8" />
          <Bar dataKey="Rust" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceChart;