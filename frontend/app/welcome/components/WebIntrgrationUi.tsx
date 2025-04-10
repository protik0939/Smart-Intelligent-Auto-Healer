import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import type { TelegramData } from "models/types";


export default function WebIntegrationUi({ object }: { object: TelegramData }) {
  const activeScript = "web_integration";
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/run", {
        activeScript,
        password: null,
      });

      // Show success SweetAlert
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Message sent ✅",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        background: "#1d232a",
        color: "#fff",
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "error",
        title: "❌ Failed to send message",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        background: "#1d232a",
        color: "#fff",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-base-200 rounded-2xl shadow-md text-base-content">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-2">📨 Telegram Bot Info</h2>
        <p className="text-sm opacity-70">Project communication details with Telegram integration</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Message */}
        <div className="card bg-base-100 shadow-xl col-span-1 md:col-span-2 p-4">
          <h3 className="font-semibold text-lg mb-1">Message</h3>
          <p className="text-sm opacity-80">{object?.message}</p>
          <button className={`btn btn-primary mt-6 ${loading && "btn-disabled"}`} onClick={sendMessage}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>

      {/* Team Members */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-2">👨‍💻 Team Members</h3>
        <ul className="space-y-2">
          {object?.teamMembers?.map((member, index) => (
            <li
              key={index}
              className="bg-base-100 rounded-lg p-3 shadow hover:bg-base-300 transition"
            >
              {index + 1}. {member}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
