import React from 'react'
import type { CpuStatus } from 'models/types'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, ResponsiveContainer,
} from 'recharts'

const COLORS = ['#3b82f6', '#10b981', '#facc15', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6']

export default function ProcessorUi({ object }: { object: CpuStatus[] }) {
  // Clean and parsed data
  const parsedData = object.map((coreStatus) => ({
    name: coreStatus.core === -1 ? 'Overall' : `Core ${coreStatus.core}`,
    value: parseFloat(coreStatus.status.replace('%', '')),
  }))

  return (
    <div className="p-6 space-y-8">
      {/* Radial Progress */}
      <div>
        <h2 className="text-xl font-bold mb-4">Radial CPU Core Usage</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {parsedData.map((core, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-base-200 rounded-xl shadow-md"
            >
              <div
                className="radial-progress text-primary"
                style={{ "--value": core.value } as React.CSSProperties}
              >
                {core.value}%
              </div>
              <div className="mt-2 text-sm text-center">{core.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bar Chart */}
      <div>
        <h2 className="text-xl font-bold mb-4">Bar Chart</h2>
        <div className="bg-base-200 p-4 rounded-xl shadow-md">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={parsedData}>
              <XAxis dataKey="name" />
              <YAxis unit="%" />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie Chart */}
      <div>
        <h2 className="text-xl font-bold mb-4">Pie Chart</h2>
        <div className="bg-base-200 p-4 rounded-xl shadow-md flex justify-center">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={parsedData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {parsedData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
