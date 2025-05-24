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

## Future Enhancements / Planned Features

### Profile Enhancements
- Profile picture upload and preview
- Editable profile fields (name, bio, contact info)
- Activity log to track user actions
- Followers and following system to build social connections
- Privacy controls for profile visibility
- Dark and light mode theme toggle for better UX

### Messaging Enhancements
- Threaded or nested message replies for better conversation context
- Real-time messaging via WebSockets or similar technologies
- Message reactions (like, emoji reactions)
- Ability to edit or delete sent messages
- Typing indicators to show when a user is composing a message
- Read receipts to inform users when messages are read
- Support for file attachments in chat

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
