import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchProfile } from '../../../redux/slices/profileSlice';
import { Link } from 'react-router-dom';
import Footer from '../../Home/Footer/Footer';
import FeatureC from '../FeatureSection/FeatureSection2';
import './HomePage.css';
import { ChevronDown } from "lucide-react";

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);
  const loading = useSelector((state) => state.profile.loading);
  const error = useSelector((state) => state.profile.error);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const featureRef = useRef(null); // Create a reference for FeatureSection

  const scrollToFeatures = () => {
    if (featureRef.current) {
      featureRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='welcomePage'>
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Home</Link>
        </div>
        <div className="logo">SaarthiAI</div>
        <div className="login-btns">  
          <Link to='/dashboard'>
            <button className="menu-btn">{user?.name || 'No name available'}</button>
          </Link>
        </div>
      </nav>

      <section className="career-herofc">
  <div className="contentfc">
    <p className="empower-textfc">Empower Your Future</p>
    <h1 className="titlewc">Welcome to Smarter Learning</h1>
    <p className="desctfc">Revolutionize your learning journey with cutting-edge tools tailored for students and professionals. From AI-powered insights to personalized lesson plans, we're here to help you unlock your full potential. Start transforming your development today!</p>
    <ChevronDown onClick={scrollToFeatures} size={50} className='descriptionfc' />
  </div>
</section>

      {/* Attach the ref here */}
      <div ref={featureRef}>
        <FeatureC />
      </div>
      <div className='lmr'>
      <button>Learn More</button>
</div>
      <Footer />
    </div>
  );
};

export default UserProfile;
