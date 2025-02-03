import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom"; // Import Link for navigation
import './KnowledgeAssessment.css';

const KnowledgeAssessmentQuiz = () => {
  const [quizData, setQuizData] = useState(null);
  const [userId, setUserId] = useState("");
  const [userRole, setUserRole] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Fetch user details from cookies
  useEffect(() => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      const parsedUser = JSON.parse(userCookie);
      setUserId(parsedUser.id);
      setUserRole(parsedUser.role);
    } else {
      console.error("User information not found in cookies");
    }
  }, []);

  // Fetch quiz questions
  useEffect(() => {
    const fetchQuizData = async () => {
      if (userId) {
        try {
          const response = await axios.get(`http://127.0.0.1:5000/get_quiz`);
          if (response.data.quiz) {
            setQuizData(response.data.quiz); // Assuming response.data.quiz is an array
          } else {
            console.error("Quiz data not found");
          }
        } catch (error) {
          console.error("Error fetching quiz data:", error);
        }
      }
    };

    fetchQuizData();
  }, [userId]);

  // Handle answer selection
  const handleAnswer = (value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion]: value,
    }));
  };

  // Go to next question
  const handleNext = () => {
    if (answers[currentQuestion] && currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Go to previous question
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Handle quiz submission
  const handleSubmitQuiz = () => {
    console.log("Submitting Quiz Data:", { userId, userRole, answers });
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setQuizCompleted(true);
    }, 2000);
  };

  if (!quizData) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        Loading...
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / quizData.length) * 100;

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <div className="quiz-header">
          <h1 className="quiz-title">Knowledge Assessment Quiz</h1>
          <p className="quiz-description">Test your knowledge and skills</p>
        </div>
        <div className="quiz-content">
          {!quizCompleted ? (
            <>
              <div className="quiz-progress-container">
                <div className="quiz-progress-bar" style={{ width: `${progress}%` }}></div>
              </div>
              <div className="quiz-question-count">
                Question {currentQuestion + 1} of {quizData.length}
              </div>
              <div className="quiz-question">
                <h2 className="quiz-question-text">
                  {quizData[currentQuestion].question_text}
                </h2>
                <div className="quiz-options">
                  {Object.entries(quizData[currentQuestion].options).map(([key, value]) => (
                    <div key={key} className="quiz-option">
                      <input
                        type="radio"
                        id={`option-${key}`}
                        name={`question-${currentQuestion}`}
                        value={key}
                        checked={answers[currentQuestion] === key}
                        onChange={() => handleAnswer(key)}
                        className="quiz-radio-button"
                      />
                      <label htmlFor={`option-${key}`} className="quiz-label">
                        {value}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="quiz-completed">
              <h2 className="quiz-completed-title">Quiz Completed!</h2>
              <p className="quiz-completed-text">Thank you for completing the knowledge assessment quiz.</p>
            </div>
          )}
        </div>
        <div className="quiz-footer">
          {!quizCompleted && (
            <>
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="quiz-button quiz-previous-button"
              >
                Previous
              </button>
              {currentQuestion < quizData.length - 1 ? (
                <button
                  onClick={handleNext}
                  disabled={!answers[currentQuestion]}
                  className="quiz-button quiz-next-button"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={handleSubmitQuiz}
                  className="quiz-button quiz-submit-button"
                >
                  {isSubmitting ? "Submitting..." : "Submit Quiz"}
                </button>
              )}
            </>
          )}
          {quizCompleted && (
            <Link to='/evaluation' className="quiz-button quiz-evaluation-button">
              See Evaluation
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeAssessmentQuiz;
