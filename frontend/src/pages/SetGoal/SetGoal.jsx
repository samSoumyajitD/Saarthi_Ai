import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./SetGoal.css";
import { Link } from "react-router-dom";
import { fetchProfile } from "../../redux/slices/profileSlice";

const questions = [
  { id: "goal", text: "What is your learning goal?", type: "text" },
  { id: "timePerWeek", text: "How many hours per week can you dedicate?", type: "text" },
  { id: "learningMode", text: "Preferred learning mode?", type: "select", options: ["All", "Video", "Reading", "Hands-on practice"] },
  { id: "skillLevel", text: "What is your skill level?", type: "select", options: ["Beginner", "Intermediate", "Advanced"] },
  { id: "deadline", text: "What is your deadline (in months)?", type: "text" },
];

const GoalForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const [answers, setAnswers] = useState({
    goal: "",
    timePerWeek: "",
    learningMode: "All",
    skillLevel: "Beginner",
    deadline: "",
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setAnswers({ ...answers, [questions[currentStep].id]: e.target.value });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/goals/createOrUpdate",
        {
          goal: answers.goal,
          time_per_week: answers.timePerWeek,
          learning_mode: answers.learningMode,
          skill_level: answers.skillLevel,
          deadline: answers.deadline,
        },
        { withCredentials: true }
      );
      setMessage(response.data.message);

      if (response.data.message.includes("success")) {
        // Redirect based on user role
        if (user?.role === "Student") {
          navigate("/RoadMap");
        } else if (user?.role === "Working_Pro") {
          navigate("/RoadMap");
        }
      }
    } catch (error) {
      setMessage(error.response ? error.response.data.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <header className="headerquiz">
        <h1 className="titlequiz">Interactive Goal Setter</h1>
        <h1 className="logoquiz">SaarthiAI</h1>
        <button className="iconquiz">
          <Link to="/dashboard">{user?.name ? user.name[0] : "S"}</Link>
        </button>
      </header>
      
      <div className="scumq">
        <div className="sidebarq">
          {questions.map((q, index) => (
            <button
              key={q.id}
              className={`sidebar-btn ${index === currentStep ? "active" : ""}`}
              onClick={() => setCurrentStep(index)}
            >
              {q.text}
            </button>
          ))}
        </div>

        <div className="quiz-containerq">
          <h2 className="h2q">Set Learning Goal </h2>
          <form onSubmit={handleSubmit}>
            <div className="questionq">
              <label>{questions[currentStep].text}</label>
              {questions[currentStep].type === "text" ? (
                <input
                  type="text"
                  className="inputq"
                  value={answers[questions[currentStep].id]}
                  onChange={handleChange}
                  required
                />
              ) : (
                <select
                  className="selectq"
                  value={answers[questions[currentStep].id]}
                  onChange={handleChange}
                >
                  {questions[currentStep].options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div className="navigationq">
              {currentStep > 0 && (
                <button type="button" className="buttonq" onClick={handleBack}>
                  Back
                </button>
              )}
              {currentStep < questions.length - 1 ? (
                <button type="button" className="buttonq" onClick={handleNext}>
                  Next
                </button>
              ) : (
                <button type="submit" className="buttonq" disabled={isLoading}>
                  {isLoading ? "Submitting..." : "Save Goal"}
                </button>
              )}
            </div>
          </form>

          {message && (
            <div className={`messageq ${message.includes("success") ? "successq" : "errorq"}`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GoalForm;
