import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const scriptOptions = [
  "auto_heal",
  "disks",
  "memory",
  "network",
  "overview",
  "processor",
  "web_integration",
];

export function Welcome() {
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(false);
  const [activeScript, setActiveScript] = useState<string | null>(null);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const clickSound = typeof Audio !== "undefined" ? new Audio("/sounds/click.mp3") : null;
  const [password, setPassword] = useState<string | null>(null);

  const handleStartPolling = async (script: string) => {
    if (loading || initialLoading || activeScript === script) return;

    if (script === "auto_heal") {
      const { value, isConfirmed } = await Swal.fire({
        title: 'Enter Sudo Password',
        input: 'password',
        inputLabel: 'This script requires sudo access',
        inputPlaceholder: 'Enter your password',
        inputAttributes: {
          autocapitalize: 'off',
          autocorrect: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Run Script',
        cancelButtonText: 'Cancel',
        background: '#1e1e1e',
        color: '#fff',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33'
      });

      if (!isConfirmed || !value) return; // Cancelled or empty
      setPassword(value); // Store password in state
    }

    clickSound?.play();
    setActiveScript(script);
    setOutput(null);

    setTimeout(() => {
      fetchScript(script, password, true); // use state password
      const id = setInterval(() => {
        fetchScript(script, password, false); // use state password
      }, 5000);
      setIntervalId(id);
    }, 200);
  };


  const fetchScript = async (script: string, password: string | null, initial = false) => {
    if (initial) setInitialLoading(true);
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/run", { script, password });
      setOutput(response.data);
    } catch (error) {
      console.error(error);
      setOutput("❌ Error running the script");
    } finally {
      setLoading(false);
      if (initial) setInitialLoading(false);
    }
  };

  const handleStop = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setActiveScript(null);
      setOutput("🛑 Stopped polling.");
    }
  };

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <div className="relative min-h-screen bg-base-200 flex flex-col items-center p-8 overflow-hidden">
      {/* Loader Overlay */}
      {initialLoading && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-base-100 bg-opacity-80 backdrop-blur-md p-4 rounded-lg shadow-xl animate-fade-in border border-base-300">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <span className="text-sm text-base-content font-medium animate-pulse">
            Running {activeScript?.replace(/_/g, " ")}...
          </span>
        </div>
      )}


      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-primary mb-2 animate-fade-in">
          🚑 Smart Intelligent Auto Healer
        </h1>
        <p className="text-base-content text-lg">
          Click a button below to start auto-fetching every 5 seconds
        </p>
      </div>

      {/* Buttons Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-full max-w-4xl">
        {scriptOptions.map((option) => (
          <button
            key={option}
            className={`btn btn-primary btn-outline hover:scale-105 transition-all duration-200 ${initialLoading ? 'btn-disabled' : ''} }`}
            onClick={() => handleStartPolling(option)}
          >
            {activeScript === option ? "🔁 Fetching..." : option.replace(/_/g, " ")}
          </button>
        ))}
        {activeScript && (
          <button
            className="btn btn-error btn-outline col-span-full sm:col-span-1 hover:scale-105 transition-transform duration-200"
            onClick={handleStop}
          >
            🛑 Stop
          </button>
        )}
      </div>

      {/* Output */}
      <div className="mt-10 w-full max-w-4xl">
        {output && (
          <div className="mt-6 p-4 bg-base-100 rounded-box shadow-lg animate-fade-in">
            <h3 className="text-xl font-semibold mb-2 text-secondary">Output:</h3>
            <pre className="whitespace-pre-wrap break-words text-sm text-base-content bg-base-300 p-4 rounded-md">
              {output}
            </pre>
          </div>
        )}
      </div>

      {/* Tailwind animations */}
      <style>{`
        .animate-fade-in {
          animation: fadeIn 0.4s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
