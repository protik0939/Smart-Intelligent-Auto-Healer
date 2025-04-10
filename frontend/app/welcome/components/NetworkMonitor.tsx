import type { NetworkUsage } from "models/types";
import { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function NetworkMonitor({ object }: { object: NetworkUsage }) {
  const [history, setHistory] = useState<NetworkUsage[]>([]);

  useEffect(() => {
    if (!object) return;

    const now = new Date();
    const time = now.toLocaleTimeString();

    // Add timestamp to the object
    const entry = {
      ...object,
      time,
    };

    setHistory((prev) => {
      const updated = [...prev, entry];

      // Keep only the latest 20 records to avoid memory bloat
      return updated.slice(-20);
    });
  }, [object]);

  return (
    <div className="p-6 bg-base-200 text-base-content rounded-lg shadow-md max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">🌐 Network Usage</h2>

      <div className="grid grid-cols-2 gap-6 mb-6 text-center">
        <div className="bg-base-100 p-4 rounded-box shadow">
          <h3 className="text-lg font-semibold">📥 Download</h3>
          <p className="text-3xl text-blue-500">{object?.download_kbps ?? 0} KB/s</p>
        </div>
        <div className="bg-base-100 p-4 rounded-box shadow">
          <h3 className="text-lg font-semibold">📤 Upload</h3>
          <p className="text-3xl text-green-500">{object?.upload_kbps ?? 0} KB/s</p>
        </div>
      </div>

      <div className="bg-base-100 p-4 rounded-box">
        <h3 className="font-bold mb-2">📊 Live Bandwidth Graph</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={history}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="download_kbps" stroke="#3b82f6" name="Download" />
            <Line type="monotone" dataKey="upload_kbps" stroke="#10b981" name="Upload" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
