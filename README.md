# 🚑 Smart Intelligent Auto Healer

**Smart Intelligent Auto Healer** is a system monitoring and self-healing automation tool that provides real-time diagnostics and automated recovery for your PC. It uses Bash scripts to gather system insights and perform actions, all wrapped in a sleek graphical and terminal-based UI built with React.js and Node.js.

---

## 🌟 Key Features

✅ **Auto-Heal**  
Automatically resolves common system-level issues using Bash scripts.

✅ **System Overview**  
See real-time stats on CPU, Memory, Disk, and Network in a graphical + terminal view.

✅ **Disk Monitor**  
View available and used storage space across mounted drives.

✅ **Memory Monitor**  
Keep an eye on RAM usage, available memory, and swap status.

✅ **Network Monitor**  
Monitor current upload/download activity, IP addresses, and interface info.

✅ **Telegram API Integration**  
Send status updates or alerts to a Telegram channel/group/chat with a single click.

---

## 🧠 How It Works

- **Bash-Powered Monitoring**: The core data collection and healing logic is implemented using `.sh` Bash scripts.
- **Node.js Backend**: Executes the bash scripts, processes their output (usually as JSON), and serves it to the frontend.
- **React Frontend**: Displays the system data in both terminal-style view and modern graphical charts.
- **Telegram Integration**: Trigger backend endpoints that use `curl` with Telegram Bot API to send messages programmatically.

---

## 📁 Project Structure

```
Smart-Intelligent-Auto-Healer/
├── backend/            # Backend services and logic
│   ├── scripts/        # Shell scripts for automation
├── frontend/           # Frontend interface
├── .gitignore          # Git ignore file
└── README.md           # Project documentation
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/protik0939/Smart-Intelligent-Auto-Healer.git
cd Smart-Intelligent-Auto-Healer
```

### 2. Install Dependencies

```bash
cd backend
npm install

cd frontend
npm install
```

### 3. Set Execute Permissions (if needed)

If backend scripts throw permission errors, run:

```bash
chmod +x ./scripts/*.sh
chmod +x ./node_modules/.bin/ts-node
chmod +x ./node_modules/.bin/nodemon
```

---

## 🚀 Running the App

### Terminal 1 – Backend:

```bash
cd backend
npm run dev
```

### Terminal 2 – Frontend:

```bash
cd frontend
npm run dev
```

Then open: [http://localhost:5173](http://localhost:5173)

---

## 🔌 Telegram Integration

Your project integrates with the **Telegram Bot API**. On clicking the Telegram button in the UI, the backend triggers shell scripts to send system updates or alert messages to your Telegram group/channel using `curl`.

You can configure your Telegram bot token and chat ID in a `.env` file or directly inside the script (based on your current setup).

---

## 🧪 Technologies Used

- 🐚 Bash Shell Scripting
- ⚙️ Node.js + Express.js
- ⚛️ React.js
- 📊 Chart.js or similar (for graphs)
- 🌐 Telegram Bot API

---


## 👨‍💻 Author

- **Jubair Amin Siyum**  
  - GitHub: [jubairsiyum](https://github.com/jubairsiyum)
- **Sadat Alam Protik**  
  - GitHub: [protik0939](https://github.com/protik0939)
- **Ishmak Rahat Rafi**  
  - GitHub: [Rafi2046](https://github.com/Rafi2046)
- **Shakib**  
  - GitHub: [sHakibMusfiqur](https://github.com/sHakibMusfiqur)
- **Hasan Jarif**  
  - GitHub: [jarif12538](https://github.com/jarif12538)

---

## 📜 License

This project is licensed under the [MIT License](LICENSE)
