import type { MemoryStatus } from "models/types";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  LineChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export default function MemoryUi({ object }: { object: MemoryStatus }) {
  const memoryData = object?.memory;

  const data = [
    { name: "Total", value: parseFloat(memoryData.total) },
    { name: "Used", value: parseFloat(memoryData.used) },
    { name: "Free", value: parseFloat(memoryData.free) },
    { name: "Available", value: parseFloat(memoryData.available) },
  ];

  const [lineData, setLineData] = useState<
    { name: string; used: number; free: number; available: number }[]
  >([]);

  useEffect(() => {
    if (memoryData?.used && memoryData?.free && memoryData?.available) {
      const timestamp = new Date().toLocaleTimeString();

      setLineData((prev) => {
        const newEntry = {
          name: timestamp,
          used: parseFloat(memoryData.used),
          free: parseFloat(memoryData.free),
          available: parseFloat(memoryData.available),
        };
        const updated = [...prev, newEntry];
        return updated.slice(-15); // keep last 15 data points
      });
    }
  }, [memoryData?.used, memoryData?.free, memoryData?.available]);

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-center text-3xl font-semibold mb-6">Memory Usage</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Memory Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Memory</h3>
          <p><strong>Total:</strong> {memoryData.total}</p>
          <p><strong>Used:</strong> {memoryData.used}</p>
          <p><strong>Free:</strong> {memoryData.free}</p>
          <p><strong>Shared:</strong> {memoryData.shared}</p>
          <p><strong>Buffer/Cache:</strong> {memoryData.buff_cache}</p>
          <p><strong>Available:</strong> {memoryData.available}</p>
        </div>

        {/* Swap Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Swap</h3>
          <p><strong>Total:</strong> {object?.swap?.total}</p>
          <p><strong>Used:</strong> {object?.swap?.used}</p>
          <p><strong>Free:</strong> {object?.swap?.free}</p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Memory Usage (Graphical View)</h3>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#3182CE" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Line Chart */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Memory Over Time (Line Graph)</h3>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="used" stroke="#FF6347" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="free" stroke="#4FD1C5" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="available" stroke="#90CDF4" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
