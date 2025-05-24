# Full-Stack Authentication web with Profile & Messaging

This is a full-stack web application built with Next.js, MongoDB, and Node.js that provides user authentication (signup, login, logout), user profile management, and a messaging system. The app uses JWT for authentication and secure API routes with middleware.

---

## Features

- User registration with email and password
- Secure login and logout with JWT-based authentication stored in httpOnly cookies
- Password hashing with bcrypt for security
- Protected routes using middleware that checks for valid JWT tokens
- Profile page displaying user information
- CRUD operations for user profile details (basic)
- Messaging system allowing users to send and receive messages
- Messages linked to user accounts with timestamps

---



## Tech Stack

- Frontend: Next.js, React, Tailwind CSS
- Backend: Next.js API Routes, Node.js, Express (optional)
- Database: MongoDB, Mongoose
- Authentication: JWT, bcryptjs
- Middleware for route protection
- Toast notifications with react-hot-toast

---

## Setup and Installation

1. Clone the repo  
   ```bash
   git clone https://github.com/yourusername/your-project-name.git
   cd your-project-name
