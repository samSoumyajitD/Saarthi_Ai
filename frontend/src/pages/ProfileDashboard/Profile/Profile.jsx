import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile } from '../../../redux/slices/profileSlice';
import './Profile.css';

const Profile = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  if (loading) return <div className="loading">Loading...</div>;

  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="profile-container">
      <h2 className="profile-title">Profile</h2>
      {user && (
        <div className="profile-details">
          {[
            { label: 'Organization', value: user.organization },
            { label: 'Current Position', value: user.currentPosition },
            { label: 'Field of Study/Work', value: user.fieldOfStudyOrWork },
            { label: 'Expertise Level', value: user.expertiseLevel },
            { label: 'Preferred Learning Style', value: user.preferredLearningStyle },
            { label: 'Takes Notes', value: user.takesNotes ? 'Yes' : 'No' },
            { label: 'Learning Type', value: user.learningType },
            { label: 'End Goal', value: user.endGoal },
            { label: 'Time Spent Learning Per Week', value: user.timeSpentLearningPerWeek },
            { label: 'Preferred Learning Time', value: user.preferredLearningTime },
            { label: 'Prefers Group Learning', value: user.prefersGroupLearning ? 'Yes' : 'No' },
            { label: 'Interest Areas', value: user.interestAreas?.join(', ') },
            { label: 'About Me', value: user.tellSomethingAboutYou || 'N/A' }
          ].map((item, index) => (
            <div key={index} className="profile-item">
              <span className="profile-label">{item.label}</span>
              <span className="profile-value">{item.value || 'N/A'}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
