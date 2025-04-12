# Smart Intelligent Auto Healer

**Smart Intelligent Auto Healer** is an AI-powered automation tool designed to monitor and automatically resolve common issues in software systems. It leverages shell scripting and TypeScript to detect, diagnose, and heal backend service errors without manual intervention.

---

## 🚀 Features

- **Self-Healing Backend**: Automatically detects and resolves common backend errors.
- **Shell Script Automation**: Utilizes shell scripts for efficient system operations.
- **TypeScript Integration**: Incorporates TypeScript for robust backend development.
- **Modular Architecture**: Structured with separate `frontend` and `backend` directories for clarity and maintainability.

---

## 📁 Project Structure

```
Smart-Intelligent-Auto-Healer/
├── backend/            # Backend services and logic
   ├── scripts/  # Shell scripts for automation
├── frontend/           # Frontend interface
├── .gitignore          # Git ignore file
└── README.md           # Project documentation
```

---

## 🛠️ Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/protik0939/Smart-Intelligent-Auto-Healer.git
   cd Smart-Intelligent-Auto-Healer
   ```

2. **Install dependencies in both frontend and backend**:

   ```bash
   cd backend
   npm install

   cd frontend
   npm install
   ```

3. **Set execute permissions (if needed)**:

   If the backend throws permission errors, run:

   ```bash
   chmod +x ./scripts/*.sh
   chmod +x ./node_modules/.bin/ts-node
   chmod +x ./node_modules/.bin/nodemon
   ```

---

## ⚙️ Usage

1. **Start the backend**:

   ```bash
   cd backend
   npm run dev
   ```

2. **Start the frontend** (in a new terminal):

   ```bash
   cd frontend
   npm run dev
   ```

3. Open the application in your browser (usually at `http://localhost:5173` or `3000` depending on your setup).

---

## 📌 Notes

- Ensure all shell scripts in the `scripts/` directory have execute permissions.
- Make sure `nodemon` and `ts-node` are properly installed for backend development.

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

## 📄 License

This project is licensed under the [MIT License](LICENSE).
