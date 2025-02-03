import React from "react";
import CustomChatbot from "../ChatBot/Chatbot";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { fetchProfile } from "../../redux/slices/profileSlice";
import Aside from "../ChatBot/Aside"; // Import the reusable Aside component
import "./Chatbot.css";

const AiProf = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);
  const navigate = useNavigate(); // Initialize useNavigate hook

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
        <h1 className="logoquiz">SaarthiAI - AI Professor</h1>
        <button className="iconquiz">
          <Link to="/dashboard">{user?.name ? user.name[0] : "S"}</Link>
        </button>
      </header>

      {/* Reusable Sidebar for AI Professor */}
      <Aside title="Meet Your AI Professor 🎓">
        <p className="instructions">📌 <strong>How to Use:</strong></p>
        <ul className="sidebar-list">
          <li>📚 Ask about complex concepts in AI, ML, and CS.</li>
          <li>🧠 Get in-depth explanations & research insights.</li>
          <li>📖 Learn with interactive problem-solving guidance.</li>
          <li>⚡ Boost your knowledge with expert-level tutoring.</li>
        </ul>
        <p className="motivation">💡 <strong>Stay Inspired:</strong></p>
        <blockquote className="quote">
          "An investment in knowledge pays the best interest."
          <span> – Benjamin Franklin</span>
        </blockquote>
      </Aside>

      <CustomChatbot
        headerTitle="AI Professor"
        firstMessage="Greetings, student! 🎓 I am your AI Professor, here to guide you through AI, ML, and Computer Science concepts. What would you like to learn today?"
      />

      {/* Back Button */}
      <button className="back-button" onClick={handleBackButtonClick}>
      👈 Back to Leaning
      </button>
    </div>
  );
};

export default AiProf;
