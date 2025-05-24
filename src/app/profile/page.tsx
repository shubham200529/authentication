"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function ProfilePage() {
  const router = useRouter();

  const [tab, setTab] = useState("about");
  const [followed, setFollowed] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const followSound = useRef<HTMLAudioElement | null>(null);
  const unfollowSound = useRef<HTMLAudioElement | null>(null);

  const handleFollowToggle = () => {
    const newStatus = !followed;
    setFollowed(newStatus);
    setToastMessage(newStatus ? "✅ You followed Shubham" : "🚫 You unfollowed Shubham");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);

    if (newStatus) {
      followSound.current?.play();
    } else {
      unfollowSound.current?.play();
    }
  };

  return (
    <div className="min-h-screen bg-[#1c1221] text-white font-['Inter','Noto Sans',sans-serif] relative">
      {/* Follow/Unfollow Sounds */}
      <audio ref={followSound} src="https://assets.mixkit.co/sfx/preview/mixkit-game-click-1114.mp3" />
      <audio ref={unfollowSound} src="https://assets.mixkit.co/sfx/preview/mixkit-player-losing-or-failing-2042.mp3" />

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="fixed top-5 right-5 z-50 bg-[#3b2546] text-white px-4 py-2 rounded-lg shadow-lg"
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="flex items-center justify-between border-b border-[#3b2546] px-10 py-4">
        <div className="flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-purple-400">Home</a>
          <a href="#" className="hover:text-purple-400">Explore</a>
          <a href="#" className="hover:text-purple-400">Create</a>
        </div>
        <div className="flex gap-4 items-center">
          <button className="h-10 w-10 flex items-center justify-center rounded-full bg-[#3b2546]">🔔</button>
          <button className="h-10 w-10 flex items-center justify-center rounded-full bg-[#3b2546]">💬</button>
          <div
            className="w-10 h-10 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://th.bing.com/th/id/OIP.RgHyDSGFNXrcemLuSR0A0AHaHa?rs=1&pid=ImgDetMain')",
            }}
          ></div>
        </div>
      </header>

      {/* Hero Banner */}
      <div
        className="w-full h-60 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://cdn.usegalileo.ai/sdxl10/58cb153c-5f04-45de-8bab-6f3ac229da89.png')",
        }}
      ></div>

      {/* Profile Info */}
      <div className="px-10 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div className="flex gap-6 items-center">
          <div
            className="w-32 h-32 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: "url('https://th.bing.com/th/id/OIP.RgHyDSGFNXrcemLuSR0A0AHaHa?rs=1&pid=ImgDetMain')",
            }}
          ></div>
          <div>
            <h1 className="text-2xl font-bold">shubham tiwary</h1>
            <p className="text-[#b695c6]">stiwary@gmail.com</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleFollowToggle}
            className={`px-6 py-2 rounded-full font-bold transition ${
              followed ? "bg-[#8019b3] hover:bg-[#a62ce6]" : "bg-[#3b2546] hover:bg-[#543159]"
            }`}
          >
            {followed ? "Unfollow" : "Follow"}
          </button>
          <button
            onClick={() => router.push("/message")}
            className="bg-[#8019b3] px-6 py-2 rounded-full font-bold hover:bg-[#a62ce6] transition"
          >
            Message
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-10 border-b border-[#3b2546] mb-6">
        <div className="flex gap-10">
          {["about", "activity", "settings"].map((item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`py-2 border-b-2 font-semibold capitalize ${
                tab === item ? "border-purple-500 text-purple-300" : "border-transparent text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-10">
        {tab === "about" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-xl font-bold mb-2">About</h2>
            <p>Welcome to shubham profile. This section contains user bio and general info.</p>
          </motion.div>
        )}
        {tab === "activity" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-xl font-bold mb-2">Activity</h2>
            <p>Recent posts, likes, and interactions go here.</p>
          </motion.div>
        )}
        {tab === "settings" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-xl font-bold mb-2">Settings</h2>
            <p>Update your preferences, password, and more in this section.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
