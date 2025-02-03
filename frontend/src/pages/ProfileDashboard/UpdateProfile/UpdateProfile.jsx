import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfile, updateProfile } from '../../../redux/slices/profileSlice';
import './UpdateProfile.css';
import { Link, useNavigate } from 'react-router-dom';

const ProfileBuilding = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const initialState = {
    name: '',
    email: '',
    organization: '',
    currentPosition: '',
    fieldOfStudyOrWork: '',
    expertiseLevel: '',
    preferredLearningStyle: '',
    takesNotes: false,
    learningType: '',
    endGoal: '',
    timeSpentLearningPerWeek: '',
    preferredLearningTime: '',
    prefersGroupLearning: false,
    interestAreas: [],
    tellSomethingAboutYou: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [currentStep, setCurrentStep] = useState(1);
  const [newInterest, setNewInterest] = useState('');
  const [activeSidebar, setActiveSidebar] = useState(1);

  useEffect(() => {
    if (!user) {
      dispatch(fetchProfile());
    } else {
      setFormData((prev) => ({ ...prev, ...user }));
    }
  }, [user, dispatch]);

  useEffect(() => {
    localStorage.setItem('profileForm', JSON.stringify(formData)); // Auto-save feature
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAddInterest = () => {
    if (newInterest && !formData.interestAreas.includes(newInterest)) {
      setFormData((prev) => ({
        ...prev,
        interestAreas: [...prev.interestAreas, newInterest],
      }));
    }
    setNewInterest('');
  };

  const handleRemoveInterest = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interestAreas: prev.interestAreas.filter((item) => item !== interest),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (user?._id) {
      dispatch(updateProfile({ userId: user._id, profileData: formData })).then(() => {
        // Redirect based on user role
        if (user.role === "Student") {
          navigate("/studentProfile");
        } else if (user.role === "Working_Pro") {
          navigate("/workingProfenalProfile");
        }
      });
    } else {
      console.error('User ID is missing');
    }
  };
  

  const steps = [
    { title: 'Basic Information', fields: [
      { label: 'User Name', name: 'name', type: 'text' },
      { label: 'Email', name: 'email', type: 'email' },
      { label: 'Organization', name: 'organization', type: 'text' },
    ]},
    { title: 'Professional Information', fields: [
      { label: 'Current Position', name: 'currentPosition', type: 'text' },
      { label: 'Field of Study or Work', name: 'fieldOfStudyOrWork', type: 'text' },
      { label: 'Expertise Level', name: 'expertiseLevel', type: 'select', options: ['Beginner', 'Intermediate', 'Advanced'] },
    ]},
    { title: 'Learning Preferences', fields: [
      { label: 'Preferred Learning Style', name: 'preferredLearningStyle', type: 'select', options: ['Videos', 'Articles', 'Both'] },
      { label: 'Takes Notes', name: 'takesNotes', type: 'checkbox' },
      { label: 'Learning Type', name: 'learningType', type: 'select', options: ['Self-paced', 'Structured'] },
    ]},
    { title: 'Goals and Time Commitment', fields: [
      { label: 'End Goal', name: 'endGoal', type: 'text' },
      { label: 'Time Spent Learning per Week', name: 'timeSpentLearningPerWeek', type: 'select', options: ['<5 hrs', '5-10 hrs', '10-20 hrs', '20+ hrs'] },
      { label: 'Preferred Learning Time', name: 'preferredLearningTime', type: 'select', options: ['Morning', 'Afternoon', 'Evening', 'Night'] },
    ]},
    { title: 'Social Learning & Interests', fields: [
      { label: 'Prefers Group Learning', name: 'prefersGroupLearning', type: 'checkbox' },
    ], 
      customComponent: (
        <div className="interest-section">
          <div className="int-sec">
            <input 
              type="text" 
              value={newInterest} 
              placeholder="Enter an interest..." 
              onChange={(e) => setNewInterest(e.target.value)}
              className="interest-input"
            />
            <button type="button" onClick={handleAddInterest} className="add-interest-btn">
              ➕ 
            </button>
          </div>

          {formData.interestAreas.length > 0 && (
            <div className="interest-list">
              {formData.interestAreas.map((interest, index) => (
                <span key={index} className="interest-chip">
                  {interest}
                  <button onClick={() => handleRemoveInterest(interest)} className="remove-interest-btn">✖</button>
                </span>
              ))}
            </div>
          )}
        </div>
      ),
    },
    { title: 'About You', fields: [{ label: 'Tell Something About You', name: 'tellSomethingAboutYou', type: 'text' }] },
  ];

  // Handle sidebar item clicks
  const handleSidebarClick = (stepIndex) => {
    setActiveSidebar(stepIndex);
    setCurrentStep(stepIndex);
  };

  return (
    <div>
      <nav className="navbar">
     
      <h1 className="titlequiz">Interative Profile Building</h1>
    
      <div className="logo">SaarthiAI</div>
        <div className="login-btns">  
          <Link to='/dashboard'>
            <button className="menu-btn">{user?.name || 'No name available'}</button>
          </Link>
        </div>
      </nav>

      <div className='Profile-Setup'>  
        <aside className='asideprU'>
          <div className='sidebarpro'>
            <h1> Question List</h1>
          </div>
          <div className='sidebar-items'>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`sidebar-item ${activeSidebar === index + 1 ? 'active' : ''}`}
                onClick={() => handleSidebarClick(index + 1)}
              >
                {step.title}
              </div>
            ))}
          </div>
        </aside>

        <div className="profile-container">
          <h1 className="profile-heading">Profile Setup</h1>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${(currentStep / steps.length) * 100}%` }}></div>
          </div>
          {loading ? <p className="loading-text">Loading...</p> : error ? <p className="error-text">{error}</p> : (
            <form className="profile-form" onSubmit={handleSubmit}>
              <h2>{steps[currentStep - 1].title}</h2>
              {steps[currentStep - 1].fields.map(({ label, name, type, options }) => (
                <div className="input-group" key={name}>
                  <label htmlFor={name}>{label}:</label>
                  {type === 'select' ? (
                    <select id={name} name={name} value={formData[name]} onChange={handleChange}>
                      {options.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  ) : type === 'checkbox' ? (
                    <input type="checkbox" id={name} name={name} checked={formData[name]} onChange={handleChange} />
                  ) : (
                    <input type={type} id={name} name={name} value={formData[name]} onChange={handleChange} />
                  )}
                </div>
              ))}
              {steps[currentStep - 1].customComponent}
              <div className="button-group">
                {currentStep > 1 && <button type="button" onClick={() => setCurrentStep(currentStep - 1)}>← Previous</button>}
                {currentStep < steps.length ? <button type="button" onClick={() => setCurrentStep(currentStep + 1)}>Next →</button> : 
                  <button type="submit" disabled={loading}>{loading ? 'Saving...' : 'Submit'}</button>}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileBuilding;
