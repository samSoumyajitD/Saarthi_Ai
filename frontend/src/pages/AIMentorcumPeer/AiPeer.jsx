import React from "react";
import CustomChatbot from "../ChatBot/Chatbot";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import { fetchProfile } from "../../redux/slices/profileSlice";
import Aside from "../ChatBot/Aside"; // Import the Aside component
import "./Chatbot.css";

const AiPeer = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);
const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);
  const handleBackButtonClick = () => {
    // Programmatically navigate to the root URL '/'
    navigate('/roadMap');
  };
  return (
    <div className="container">
      <header className="headerquiz">
        <h1 className="logoquiz">SaarthiAI - AI Peer</h1>
        <button className="iconquiz">
          <Link to="/dashboard">{user?.name ? user.name[0] : "S"}</Link>
        </button>
      </header>

      {/* Reusable Sidebar */}
      <Aside title="Welcome to SaarthiAI! 🚀">
        <p className="instructions">📌 <strong>How to Use:</strong></p>
        <ul className="sidebar-list">
          <li>🤖 Ask AI about studies, projects, coding, etc.</li>
          <li>🚀 Get AI-powered insights & brainstorming ideas.</li>
          <li>💡 Enhance learning with AI suggestions.</li>
        </ul>
        <p className="motivation">💡 <strong>Stay Motivated:</strong></p>
        <blockquote className="quote">
          "Success is not final, failure is not fatal: it is the courage to continue that counts."
          <span> – Winston Churchill</span>
        </blockquote>
      </Aside>

      <CustomChatbot
        headerTitle="AI Peer"
        firstMessage="Hey there! 👋 I’m your AI Peer—ready to help with answers, study tips, or just a quick chat. What’s on your mind?"
      />
       <button className="back-button" onClick={handleBackButtonClick}>
        👈 Back to Leaning
      </button>
    </div>
  );
};

export default AiPeer;
