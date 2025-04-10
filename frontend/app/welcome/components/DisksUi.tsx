import type { DisksStatus } from 'models/types';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function DisksUi({ object }: { object: DisksStatus[] }) {
  // Prepare data for BarChart (Disk Usage Percentage)
  const data = object.map((disk) => ({
    name: disk.device,
    usage: parseInt(disk.usage.replace('%', ''), 10), // Convert usage percentage to an integer
  }));

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-center text-3xl font-semibold mb-6">Disk Usage</h2>

      {/* Disk Table Section */}
      <div className="overflow-x-auto bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">Disk Details</h3>
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Device</th>
              <th>Size</th>
              <th>Used</th>
              <th>Available</th>
              <th>Usage</th>
              <th>Mount</th>
            </tr>
          </thead>
          <tbody>
            {object.map((disk, index) => (
              <tr key={index}>
                <td>{disk.device}</td>
                <td>{disk.size}</td>
                <td>{disk.used}</td>
                <td>{disk.available}</td>
                <td>{disk.usage}</td>
                <td>{disk.mount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Graphical View (Bar Chart) */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Disk Usage Percentage (Graphical View)</h3>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="usage" fill="#FF6347" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
