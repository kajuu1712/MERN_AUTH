# 🔐 MERN Authentication System 

A complete Authentication System built using the MERN Stack with secure Email Verification and Password Reset functionality using a 6-digit OTP sent to the user's email address.

This project is fully deployed and demonstrates production-level authentication using JWT, secure OTP handling, protected routes, and cookie-based authentication.

---

## 🌍 Live Demo

🔗  

---

## 🚀 Tech Stack

- MongoDB Atlas – Cloud Database
- Express.js – Backend Framework
- React.js – Frontend Library
- Node.js – Server Runtime
- JWT (JSON Web Token) – Secure Authentication
- Bcrypt – Password Hashing
- Nodemailer – Sending OTP Emails
- Tailwind CSS – UI Styling
- React Context API – State Management

---

## ✨ Features

### 🔐 User Registration
- Password hashing using bcrypt
- Generates secure 6-digit OTP
- Sends OTP to user email
- OTP expiry validation

### 📧 Email Verification
- Verifies account using OTP
- Prevents login before verification
- Secure backend validation

### 🔑 Login System
- JWT-based authentication
- Token stored in HTTP-only cookies
- Protected routes using middleware

### 🔁 Password Reset
- Sends reset OTP to registered email
- Validates OTP and expiration
- Secure password update

---

## 🛡 Security Implementations

- Password hashing
- JWT verification middleware
- OTP expiration validation
- Protected API endpoints
- Cookie-based authentication
- Environment variable protection
- CORS configuration for production

---

## 📂 Project Structure

```
mern-authentication-system/
│
├── BACKEND/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── FRONTEND/
│   ├── src/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│
└── README.md
```

---

## ⚙️ Environment Variables

### Backend (.env)

```
MONGODB_URI=your_mongodb_atlas_connection
JWT_SECRET=your_secret_key
SMTP_EMAIL=your_email
SMTP_PASSWORD=your_email_password
PORT=5000
```

### Frontend (.env)

```
VITE_BACKEND_URL=https://your-backend-url.onrender.com
```

---

## 🧪 API Endpoints

### Authentication

- POST `/api/auth/register`
- POST `/api/auth/login`
- POST `/api/auth/logout`
- POST `/api/auth/send-verify-otp`
- POST `/api/auth/verify-email`
- GET `/api/auth/is-auth`
- POST `/api/auth/send-reset-otp`
- POST `/api/auth/reset-password`

### User

- GET `/api/user/data` (Protected Route)

---

## ☁️ Deployment

Deployed on Render:

- Connected GitHub repository
- Environment variables configured
- MongoDB Atlas used for cloud database


---
