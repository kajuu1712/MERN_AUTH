# 🔐 MERN Authentication System 

A complete Authentication System built using the MERN Stack with secure Email Verification and Password Reset functionality using a 6-digit OTP sent to the user's email address.

This project is fully deployed and demonstrates production-level authentication using JWT, secure OTP handling, protected routes, and cookie-based authentication.

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

## Screenshots
<img width="1919" height="1029" alt="Screenshot 2026-03-17 212407" src="https://github.com/user-attachments/assets/23318c6f-1a85-44a4-abfc-a87bf37b6451" />
<img width="1919" height="1017" alt="Screenshot 2026-03-17 212650" src="https://github.com/user-attachments/assets/ba5e7f25-b21d-442f-8e57-0756df46f366" />
<img width="1907" height="1009" alt="Screenshot 2026-03-17 212716" src="https://github.com/user-attachments/assets/d07667a6-8d33-4c5d-8500-ff3675744952" />
<img src="https://github.com/user-attachments/assets/2d1f68b7-64d4-4390-8762-744aa7cfffbd)" />
<img width="1917" height="987" alt="Screenshot 2026-03-17 213201" src="https://github.com/user-attachments/assets/8fcfdce4-7d8e-4325-818f-365e2bfe4cdf" />
<img width="1918" height="900" alt="Screenshot 2026-03-17 213220" src="https://github.com/user-attachments/assets/e778e909-0da9-417a-8b06-5bdc62f5f7bc" />
<img width="1916" height="1023" alt="Screenshot 2026-03-17 212958" src="https://github.com/user-attachments/assets/9cbc32b6-f9c6-47e2-89e9-7195c68a1a95" />
<img width="1890" height="1011" alt="Screenshot 2026-03-17 213033" src="https://github.com/user-attachments/assets/87a1bc5c-1da1-4109-a7e3-977ed45f7703" />
<img width="1919" height="1018" alt="Screenshot 2026-03-17 213048" src="https://github.com/user-attachments/assets/2162d046-2de4-48f3-929c-b1f0c7b1eccb" />




---
