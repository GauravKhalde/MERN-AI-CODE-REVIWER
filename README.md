# 🧠 AI Code Reviewer App (MERN + Gemini API)

This is a fullstack **AI-powered code reviewer app** built using the MERN stack. Users can write code in a live editor, click "Review", and get suggestions or improvements from **Google Gemini API** in real time.

---

## 🚀 Features

- ✍️ Real-time code editor (JS)
- 🤖 AI-generated code review using Gemini
- 🌈 Syntax highlighting (PrismJS + Highlight.js)
- 📄 Markdown rendering of AI output
- 🎯 Minimal clean UI
- ⚙️ Built with Vite + React

---

## 🛠️ Tech Stack

**Frontend:**

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white)
![PrismJS](https://img.shields.io/badge/-PrismJS-7E3794?logo=prism&logoColor=white)
![Axios](https://img.shields.io/badge/-Axios-5A29E4?logo=axios&logoColor=white)

**Backend:**

![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white)
![Dotenv](https://img.shields.io/badge/-dotenv-ECD53F?logo=dotenv&logoColor=black)

**AI:**

![Gemini](https://img.shields.io/badge/-Google%20Generative%20AI-4285F4?logo=google&logoColor=white)

---

## 📁 Folder Structure
root/
│
├── backend/
│ ├── src/
│ │ └── app.js // Express setup
│ └── server.js // Entry point
│ └── .env // Gemini API Key (NOT pushed)
│
├── frontend/
│ ├── src/
│ │ ├── App.jsx // Code editor + review
│ │ ├── main.jsx // Entry point
│ │ └── App.css
│ ├── public/
│ └── index.html
│
└── README.md



---

## 📦 Installation & Run

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

2. Backend Setup
cd backend
npm install

Create a .env file in backend/ and add:
GEMINI_API_KEY=your_api_key_here

Run backend server:
node server.js

3. Frontend Setup
cd frontend
npm install
npm run dev
Visit 👉 http://localhost:5173


🧪 Usage
Type any valid JavaScript code in the editor.

Click on the “Review” button.

Gemini AI will review your code and show suggestions on the right side.

🧠 AI Prompt Example (Optional)
The code is sent to Gemini with the following prompt:
"Please review the following JavaScript code and provide feedback, improvements, or best practices."



🔐 Environment Variables
In .env (backend):
GEMINI_API_KEY=your_google_generative_ai_key



 Future Improvements
1.Support for more languages (Python, C++)
2.Download review as PDF
3.User authentication
4.Save review history







