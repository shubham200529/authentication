// app/message/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const dummyUsers = [
  { id: 1, name: "bale", avatar: "https://up.yimg.com/ib/th?id=OIP.SumAZKs7gO0nb66zcb_fEAAAAA&pid=Api&rs=1&c=1&qlt=95&w=73&h=121" },
  { id: 2, name: "cristiano", avatar: "https://i.pinimg.com/originals/b8/5b/0d/b85b0da9f68c71d26022c4e19244cf89.jpg" },
  { id: 3, name: "messi", avatar: "https://up.yimg.com/ib/th?id=OIP.KcnD6s7eN7YYcFFL1bF4OwHaHa&pid=Api&rs=1&c=1&qlt=95&w=111&h=111" },
];

const dummyMessages = [
  { from: "Alice", text: "Hey! How's it going?" },
  { from: "You", text: "All good, just working on a project." },
  { from: "Alice", text: "Nice! Good luck with that." },
];

export default function MessagesPage() {
  const [selectedUser, setSelectedUser] = useState(dummyUsers[0]);

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Sidebar */}
      <aside className="w-64 p-4 bg-gray-900 border-r border-gray-700">
        <h2 className="text-xl font-bold mb-4">Messages</h2>
        <ul>
          {dummyUsers.map((user) => (
            <li
              key={user.id}
              onClick={() => setSelectedUser(user)}
              className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-gray-800 ${
                selectedUser.id === user.id ? "bg-gray-800" : ""
              }`}
            >
              <img src={user.avatar} alt="avatar" className="rounded-full w-8 h-8" />
              <span>{user.name}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Message Area */}
      <motion.main
        className="flex-1 p-6 flex flex-col"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-2xl font-semibold mb-6 border-b border-gray-700 pb-2">
          Chat with {selectedUser.name}
        </h3>

        <div className="flex-1 space-y-4 overflow-y-auto mb-4">
          {dummyMessages.map((msg, idx) => (
            <div
              key={idx}
              className={`max-w-md px-4 py-2 rounded-2xl ${
                msg.from === "You"
                  ? "ml-auto bg-purple-700 text-white"
                  : "mr-auto bg-gray-700 text-white"
              }`}
            >
              <p>{msg.text}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 p-3 rounded-full bg-gray-800 border border-gray-700 focus:outline-none"
          />
          <button className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition">
            Send
          </button>
        </div>
      </motion.main>
    </div>
  );
}

