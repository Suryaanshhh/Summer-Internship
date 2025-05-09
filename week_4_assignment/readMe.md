# Week 4: Full Stack Integration (Connecting MERN)

This README explains the **theory**, **architecture**, and **practical implementation** of integrating the frontend and backend in a MERN stack application. The focus is on building a **Task Manager App** with complete CRUD (Create, Read, Update, Delete) functionality. Redux Toolkit is optional for state management.

---

## 🔧 What is the MERN Stack?

The **MERN stack** is a powerful JavaScript-based technology stack used to build full-stack web applications. It includes:

- **MongoDB** – A NoSQL database that stores data in flexible, JSON-like documents.
- **Express.js** – A minimal Node.js web application framework used to build APIs.
- **React.js** – A frontend library for building fast and dynamic user interfaces.
- **Node.js** – A runtime environment that allows JavaScript to run on the server.

The key advantage: **JavaScript is used throughout**, ensuring consistency between the frontend and backend.

---

## 🧠 Theory: How Full Stack Integration Works

A MERN app typically consists of:

1. **Frontend (React)**: Manages the UI and sends HTTP requests to the backend.
2. **Backend (Node.js + Express)**: Handles API routes and business logic.
3. **Database (MongoDB)**: Stores the application’s data.

Integration happens via **RESTful APIs**:
- The React app uses **Axios** or **Fetch** to call Express routes.
- Express performs the required logic and communicates with MongoDB.
- Data flows back to React, updating the UI based on responses.

---

## ✅ Step-by-Step Integration

### 1. Backend Setup
- Initialize a Node.js project.
- Install dependencies: `express`, `mongoose`, `cors`, `dotenv`.
- Connect to MongoDB using Mongoose.
- Create RESTful routes under `/api/tasks` for:
  - `GET` - Read all tasks
  - `POST` - Create a task
  - `PUT` - Update a task
  - `DELETE` - Remove a task

### 2. Frontend Setup
- Create a React app (using Vite or CRA).
- Build components: `TaskList`, `TaskForm`, etc.
- Use **Axios** to make API requests to the backend.

### 3. Connecting Frontend to Backend
- In React, use `useEffect` to fetch tasks on load.
- Bind API calls (POST/PUT/DELETE) to button or form events.
- Update local state based on responses to reflect the latest task list.

---

## 🚀 (Optional) Redux Toolkit for State Management

### Why Use Redux Toolkit?
Redux Toolkit helps manage state cleanly in medium-to-large React apps:
- Reduces boilerplate
- Centralizes state logic
- Simplifies async API calls

### Core Concepts
- **Store**: Centralized global state
- **Slice**: Modular state logic with actions & reducers
- **Async Thunks**: For API calls like fetching tasks

### Sample Redux Flow:
1. Install:  
   ```bash
   npm install @reduxjs/toolkit react-redux axios
