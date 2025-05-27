# 🏥 Patient Management System

A full-stack CRUD application to manage patient records. Built with:

- 💻 Frontend: React, Context API, Tailwind CSS
- 🖥️ Backend: Node.js, Express, MongoDB (Mongoose)
- 📦 API: RESTful routes for Create, Read, Update, Delete

---

## 🚀 Features

- Add, update, delete, and view patients
- Form with fields: **Name, Date of Birth, Symptoms, Diagnosis**
- Modal (dialog) form triggered from anywhere using Context API
- Tailwind-powered responsive and modern UI
- REST API integration using Axios

---

## 📂 Project Structure
project-root/
│
├── backend/
│ ├── models/
│ │ └── patient.js
│ ├── routes/
│ │ └── patient.js
│ ├── server.js
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Dialog.js
│ │ │ └── PatientList.js
│ │ ├── context/
│ │ │ └── SystemContext.js
│ │ ├── App.js
│ │ └── index.js
│
├── README.md

---

## 📦 Backend Setup (Node + Express + MongoDB)

### 1. Navigate to backend and install dependencies

cd backend
npm install express mongoose cors

## 💻 Frontend Setup (React + Context API + Tailwind)
### 1. Create React app and install dependencies
        cd frontend
        npm install axios

        
### ✅ Run Instructions

**Backend**
cd backend
npm start

**Frontend**
cd frontend
npm run dev

## 📌 Notes
Ensure MongoDB is running locally or provide a cloud URI

All dates must be in ISO format (YYYY-MM-DD)

For production, add validation and better error handling

## 🙌 Credits
Created by Syed Ali Ahmad
