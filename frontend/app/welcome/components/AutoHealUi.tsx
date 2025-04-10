import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

export default function AutoHealUi() {
    const [loading, setLoading] = useState(false);
    const activeScript = "auto_heal";

    const autoHeal = async () => {
        setLoading(true);
        const { value: password } = await Swal.fire({
            title: 'Enter Sudo Password',
            input: 'password',
            inputLabel: 'Password',
            inputPlaceholder: 'Enter your password',
            showCancelButton: true,
            background: "#1d232a",
            color: "#fff",
            confirmButtonColor: "#00e6a1",
            cancelButtonColor: "#ff5555",
        });
        try {
            await axios.post("http://localhost:5000/run", {
                activeScript,
                password,
            });

            Swal.fire({
                icon: "success",
                title: "🧼 Healing Complete!",
                text: "Auto-Heal script executed successfully.",
                background: "#1d232a",
                color: "#fff",
                confirmButtonColor: "#00e6a1",
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "❌ Failed to run script",
                text: "Something went wrong!",
                background: "#1d232a",
                color: "#fff",
                confirmButtonColor: "#ff5555",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center my-20">
            <button
                className={`bubble-button ${loading ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                onClick={autoHeal}
                disabled={loading}
            >
                {loading ? "..." : "Auto Heal"}
            </button>

            <style>{`
                .bubble-button {
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.2), rgba(255,255,255,0.05));
                    border: 2px solid rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(16px);
                    color: #ffffff;
                    font-size: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 
                        0 0 30px rgba(255, 255, 255, 0.08),
                        inset 0 0 20px rgba(173, 216, 230, 0.3),
                        inset 0 0 10px rgba(255, 255, 255, 0.2);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    animation: float 4s ease-in-out infinite, wobble 6s ease-in-out infinite;
                    position: relative;
                    overflow: hidden;
                }

                .bubble-button::before {
                    content: "";
                    position: absolute;
                    width: 180%;
                    height: 180%;
                    background: radial-gradient(circle, rgba(255,255,255,0.12), transparent 70%);
                    top: -40%;
                    left: -40%;
                    border-radius: 50%;
                    animation: shimmer 8s linear infinite;
                    pointer-events: none;
                }

                .bubble-button:hover {
                    transform: scale(1.1);
                    box-shadow: 
                        0 0 35px rgba(255, 255, 255, 0.12),
                        inset 0 0 30px rgba(0, 229, 255, 0.5),
                        inset 0 0 15px rgba(255, 255, 255, 0.3);
                }

                @keyframes shimmer {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                @keyframes wobble {
                    0%, 100% {
                        transform: scale(1) rotate(0deg) skew(0deg, 0deg);
                    }
                    25% {
                        transform: scale(1.02, 0.98) rotate(1deg) skew(1deg, -1deg);
                    }
                    50% {
                        transform: scale(0.98, 1.02) rotate(-1deg) skew(-1deg, 1deg);
                    }
                    75% {
                        transform: scale(1.01, 0.99) rotate(0.5deg) skew(0.5deg, -0.5deg);
                    }
                }

                @keyframes float {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}
