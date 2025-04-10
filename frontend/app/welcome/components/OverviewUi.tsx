import type { OverviewData } from "models/types";


export default function SystemOverview({ object }: { object: OverviewData}) {

  return (
    <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">📊 System Overview</h2>

      {/* CPU */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">🔍 CPU Overview</h3>
        <p>Idle: {object.cpu.idle}%</p>
      </div>

      {/* Memory */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">🧠 Memory Overview</h3>
        <p>Total: {object.memory.total}</p>
        <p>Used: {object.memory.used}</p>
        <p>Free: {object.memory.free}</p>
      </div>

      {/* Disk */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">💾 Disk Overview</h3>
        <p>Total Storage: {object.disk.total}</p>
        <p>Free: {object.disk.free}</p>
        <p>Swap Used: {object.disk.swap}</p>
        <p>/bin Size: {object.disk.bin}</p>
        <p>/tmp Size: {object.disk.tmp}</p>
      </div>

      {/* Network */}
      <div>
        <h3 className="text-xl font-semibold mb-2">🌐 Network Overview</h3>
        <p>SSID: {object.network.ssid}</p>
        <p>IP Address: {object.network.ip}</p>
        <p>MAC Address: {object.network.mac}</p>
        <p>Gateway: {object.network.gateway}</p>
      </div>
    </div>
  );
};
