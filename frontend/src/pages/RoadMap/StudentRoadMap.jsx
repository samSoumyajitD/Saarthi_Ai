import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProfile } from '../../redux/slices/profileSlice';
import { Link } from 'react-router-dom';

import axios from "axios";
import Cookies from "js-cookie";
import "./WpRoadMap.css"; // Import the CSS file

const WpRoadMap = () => {
  const [userId, setUserId] = useState("");
  const [goals, setGoals] = useState([]);
  const [roadmap, setRoadmap] = useState("");
  const [error, setError] = useState("");
  const [parsedRoadmap, setParsedRoadmap] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedWeeks, setExpandedWeeks] = useState({});
  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    const user = Cookies.get("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserId(parsedUser.id);
    }
  }, []);

  const fetchGoals = async () => {
    if (!userId) {
      setError("User ID is required to fetch goals.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.get(`http://127.0.0.1:5000/goals/${userId}`);
      setGoals(response.data.goals);
      setError("");
    } catch (err) {
      setError(err.response ? err.response.data.error : "Error fetching goals");
      setGoals([]);
    } finally {
      setLoading(false);
    }
  };

  const generateRoadmap = async () => {
    if (!userId || goals.length === 0) {
      setError("User ID and goals are required to generate the roadmap.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(`http://127.0.0.1:5000/generate-roadmap/${userId}`, { goal: goals[0].goal });
      setRoadmap(response.data.roadmap);
      parseRoadmap(response.data.roadmap);
      setError("");
    } catch (err) {
      setError(err.response ? err.response.data.error : "Error generating roadmap");
      setRoadmap("");
    } finally {
      setLoading(false);
    }
  };

  const parseRoadmap = (roadmapString) => {
    const weeks = roadmapString.split("**Week ").slice(1);
    const parsedData = weeks.map((week) => {
      const [weekNumber, content] = week.split(":**\n");
      const [milestone, ...rest] = content.split("* ");
      const studyActivities = rest[0].replace("Study activities: ", "").trim();
      const keyConcepts = rest[1].replace("Key concepts: ", "").trim();
      const studyTip = rest[2].replace("Study tip: ", "").trim();
      const youtubeLink = roadmapString.match(/https:\/\/www\.youtube\.com\/[^\s]+/)?.[0] || "";

      return {
        weekNumber: `Week ${weekNumber}`,
        milestone: milestone.trim(),
        studyActivities,
        keyConcepts,
        studyTip,
        youtubeLink,
        completed: false,
      };
    });

    setParsedRoadmap(parsedData);
    setExpandedWeeks(Object.fromEntries(parsedData.map((week, index) => [index, index === 0])));
  };

  useEffect(() => {
    if (userId) {
      fetchGoals();
    }
  }, [userId]);

  useEffect(() => {
    const completedWeeks = parsedRoadmap.filter((week) => week.completed).length;
    setOverallProgress((completedWeeks / parsedRoadmap.length) * 100);
  }, [parsedRoadmap]);

  const toggleWeekExpansion = (index) => {
    setExpandedWeeks((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleWeekCompletion = (index) => {
    setParsedRoadmap((prev) =>
      prev.map((week, i) => (i === index ? { ...week, completed: !week.completed } : week))
    );
  };
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);


  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);
  return (
    <div className="container">
      <nav className="navbar">
      <h1 className="titlequiz">Personalized Roadmap</h1>
        <div className="logo">SaarthiAI</div>
        <div className="login-btns">  
          <Link to='/dashboard'>
            <button className="menu-btn">{user?.name || 'No name available'}</button>
          </Link>
        </div>
      </nav>
   

      <div className="goal-container">
  <h2 className="goal-title">Your Goals</h2>
  {goals.length > 0 ? (
    <ul className="goal-list">
      {goals.map((goal, index) => (
        <li key={index} className="goal-item">
          <div className="goal-content">
            <span className="goal-text">{goal.goal}</span>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <p className="no-goals-message">No goals found.</p>
  )}
</div>
<div className='bthdevt'>

      <button onClick={generateRoadmap} disabled={loading} className="generate-btn-rmap">
        {loading ? "Generating..." : "Generate Roadmap"}
      </button>

      {error && <div className="error-rmap">{error}</div>}
</div>
      {parsedRoadmap.length > 0 && (
        <div className="roadmap-container-rmap">
          <h2 className="roadmap-title-rmap">Your Roadmap</h2>

          <div className="progress-bar-container-rmap">
            <p className="progress-text-rmap">Overall Progress</p>
            <div className="progress-bar-rmap">
              <div className="progress-fill-rmap" style={{ width: `${overallProgress}%` }}></div>
            </div>
          </div>

          {parsedRoadmap.map((week, index) => (
  <div key={index} className="week-card-rmap">
    <div className="week-header-rmap" onClick={() => toggleWeekExpansion(index)}>
      <h3 className="week-title-rmap">{week.weekNumber}</h3>
      <div className="week-controls-rmap">
        <input
          type="checkbox"
          checked={week.completed}
          onChange={() => toggleWeekCompletion(index)}
          className="week-checkbox-rmap"
          onClick={(e) => e.stopPropagation()}
        />
        <span className={`arrow ${expandedWeeks[index] ? "expanded" : ""}`}>⬇️</span>
      </div>
    </div>

    {expandedWeeks[index] && (
      <div className="week-details-rmap">
        <p><strong>Milestone:</strong> {week.milestone}</p>
        <p><strong>Study Activities:</strong> {week.studyActivities}</p>
        <p><strong>Key Concepts:</strong> {week.keyConcepts}</p>
        <p><strong>Study Tip:</strong> {week.studyTip}</p>
        {week.youtubeLink && (
          <a href={week.youtubeLink} target="_blank" rel="noopener noreferrer" className="youtube-link-rmap">
            Watch related videos
          </a>
        )}
        
      </div>
    )}
  </div>
))}
<div className='protbbhbh'>
<Link to='/knowledgeAssessment'><button className="generate-btn-rmap"> Take Knowledge Assement</button></Link>
</div>

        </div>
      
      )}
    </div>
  );
};

export default WpRoadMap;
