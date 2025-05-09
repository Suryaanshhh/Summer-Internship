# Week 3: MongoDB, Mongoose & User Authentication

This project demonstrates how to use **MongoDB**, **Mongoose**, **Bcrypt**, and **JWT** to create a basic user authentication system using Node.js and Express.

---

## 🔧 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT for auth tokens
- Bcrypt for password hashing

---

## 🔁 API Routes

### 🔐 Register a new user
- **POST** `/api/auth/register`
- **Body:**
```json
{
  "name": "John",
  "email": "john@example.com",
  "password": "123456"
}
