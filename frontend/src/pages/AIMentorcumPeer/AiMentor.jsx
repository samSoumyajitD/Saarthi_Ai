import React from "react";
import CustomChatbot from "../ChatBot/Chatbot";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link,useNavigate  } from "react-router-dom";
import { fetchProfile } from "../../redux/slices/profileSlice";
import Aside from "../ChatBot/Aside"; // Import the Aside component
import "./Chatbot.css";

const AiMentor = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);
const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);
  const handleBackButtonClick = () => {
    // Programmatically navigate to the root URL '/'
    navigate('/roadMap');
  }
  return (
    <div className="container">
      <header className="headerquiz">
        <h1 className="logoquiz">SaarthiAI - AI Mentor</h1>
        <button className="iconquiz">
          <Link to="/dashboard">{user?.name ? user.name[0] : "S"}</Link>
        </button>
      </header>

      {/* Reusable Sidebar for AI Mentor */}
      <Aside title="Welcome to SaarthiAI! 💡">
        <p className="instructions">📌 <strong>How to Use:</strong></p>
        <ul className="sidebar-list">
          <li>💬 Ask me for career guidance, project advice, and mentorship tips.</li>
          <li>🌱 Get personalized growth insights to enhance your learning journey.</li>
          <li>🔍 Gain expert-level advice on AI, coding, and career development.</li>
        </ul>
        <p className="motivation">💡 <strong>Stay Motivated:</strong></p>
        <blockquote className="quote">
          "The best way to predict the future is to create it." 
          <span> – Peter Drucker</span>
        </blockquote>
      </Aside>

      <CustomChatbot
        headerTitle="AI Mentor"
        firstMessage="Hello! 👋 I’m your AI Mentor—here to guide you through your learning and career journey. How can I assist you today?"
      />
         <button className="back-button" onClick={handleBackButtonClick}>
         👈 Back to Leaning
      </button>
    </div>
  );
};

export default AiMentor;
