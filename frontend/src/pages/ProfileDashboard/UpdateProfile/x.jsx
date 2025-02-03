import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfile, updateProfile } from '../../../redux/slices/profileSlice';
import './UpdateProfile.css';

const ProfileBuilding = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.profile);
  const [formData, setFormData] = useState({
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
    tellSomethingAboutYou: ''
  });

  useEffect(() => {
    if (!user) {
      dispatch(fetchProfile());
    } else {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        organization: user.organization || '',
        currentPosition: user.currentPosition || '',
        fieldOfStudyOrWork: user.fieldOfStudyOrWork || '',
        expertiseLevel: user.expertiseLevel || '',
        preferredLearningStyle: user.preferredLearningStyle || '',
        takesNotes: user.takesNotes || false,
        learningType: user.learningType || '',
        endGoal: user.endGoal || '',
        timeSpentLearningPerWeek: user.timeSpentLearningPerWeek || '',
        preferredLearningTime: user.preferredLearningTime || '',
        prefersGroupLearning: user.prefersGroupLearning || false,
        interestAreas: user.interestAreas || [],
        tellSomethingAboutYou: user.tellSomethingAboutYou || '',
      });
    }
  }, [user, dispatch]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleInterestAreasChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      interestAreas: prevData.interestAreas.includes(value)
        ? prevData.interestAreas.filter((item) => item !== value)
        : [...prevData.interestAreas, value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user?._id) {
      dispatch(updateProfile({ userId: user._id, profileData: formData }));
    } else {
      console.error('User ID is missing');
    }
  };

  return (
    <div className="profile-container">
      <h1 className="profile-heading">Profile Building</h1>
      {loading ? (
        <p className="loading-text">Loading...</p>
      ) : error ? (
        <p className="error-text">{error}</p>
      ) : (
        <form className="profile-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-label" htmlFor="name">User Name:</label>
            <input
              className="input-field"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="email">Email:</label>
            <input
              className="input-field"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="organization">Organization:</label>
            <input
              className="input-field"
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="currentPosition">Current Position:</label>
            <input
              className="input-field"
              type="text"
              id="currentPosition"
              name="currentPosition"
              value={formData.currentPosition}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="fieldOfStudyOrWork">Field of Study or Work:</label>
            <input
              className="input-field"
              type="text"
              id="fieldOfStudyOrWork"
              name="fieldOfStudyOrWork"
              value={formData.fieldOfStudyOrWork}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="expertiseLevel">Expertise Level:</label>
            <select
              className="select-field"
              id="expertiseLevel"
              name="expertiseLevel"
              value={formData.expertiseLevel}
              onChange={handleChange}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="preferredLearningStyle">Preferred Learning Style:</label>
            <select
              className="select-field"
              id="preferredLearningStyle"
              name="preferredLearningStyle"
              value={formData.preferredLearningStyle}
              onChange={handleChange}
            >
              <option value="Videos">Videos</option>
              <option value="Articles">Articles</option>
              <option value="Both">Both</option>
            </select>
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="takesNotes">Takes Notes:</label>
            <input
              type="checkbox"
              id="takesNotes"
              name="takesNotes"
              checked={formData.takesNotes}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="learningType">Learning Type:</label>
            <select
              className="select-field"
              id="learningType"
              name="learningType"
              value={formData.learningType}
              onChange={handleChange}
            >
              <option value="Self-paced">Self-paced</option>
              <option value="Structured">Structured</option>
            </select>
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="endGoal">End Goal:</label>
            <input
              className="input-field"
              type="text"
              id="endGoal"
              name="endGoal"
              value={formData.endGoal}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="timeSpentLearningPerWeek">Time Spent Learning per Week:</label>
            <select
              className="select-field"
              id="timeSpentLearningPerWeek"
              name="timeSpentLearningPerWeek"
              value={formData.timeSpentLearningPerWeek}
              onChange={handleChange}
            >
              <option value="<5 hrs">&lt; 5 hrs</option>
              <option value="5-10 hrs">5-10 hrs</option>
              <option value="10-20 hrs">10-20 hrs</option>
              <option value="20+ hrs">20+ hrs</option>
            </select>
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="preferredLearningTime">Preferred Learning Time:</label>
            <select
              className="select-field"
              id="preferredLearningTime"
              name="preferredLearningTime"
              value={formData.preferredLearningTime}
              onChange={handleChange}
            >
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
              <option value="Night">Night</option>
            </select>
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="prefersGroupLearning">Prefers Group Learning:</label>
            <input
              type="checkbox"
              id="prefersGroupLearning"
              name="prefersGroupLearning"
              checked={formData.prefersGroupLearning}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="interestAreas">Interest Areas:</label>
            <div className="checkbox-group">
              {['Technology', 'Science', 'Art', 'Business'].map((area) => (
                <div key={area} className="checkbox-item">
                  <input
                    className="checkbox-input"
                    type="checkbox"
                    id={area}
                    name="interestAreas"
                    value={area}
                    checked={formData.interestAreas.includes(area)}
                    onChange={handleInterestAreasChange}
                  />
                  <label htmlFor={area} className="checkbox-label">{area}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="input-group">
            <label className="input-label" htmlFor="tellSomethingAboutYou">About You:</label>
            <input
              className="input-field"
              type="text"
              id="tellSomethingAboutYou"
              name="tellSomethingAboutYou"
              value={formData.tellSomethingAboutYou}
              onChange={handleChange}
            />
          </div>

          <div className="button-group">
            <button className="submit-button" type="submit" disabled={loading}>
              {loading ? 'Updating...' : 'Update Profile'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ProfileBuilding;
