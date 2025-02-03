import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchProfile } from '../../../redux/slices/profileSlice';
import { Link } from 'react-router-dom';
import Footer from '../../Home/Footer/Footer';
import { Box } from "lucide-react";

import '../Tabs.css';
import { ChevronDown } from "lucide-react";
function FeatureCard1({ title, description, exploreLink, btnName }) {
 
  return (
    <div className="feature-card">
      <Box className="iconfc" />
      <h2 className="titlefc1">{title}</h2>
      <p className="description3">{description}</p>
      <div className="actions1">
        {/* Update the link based on the role */}
        <Link to={exploreLink} className="btnfc">
          {btnName}
        </Link>
      </div>
    </div>
  );
}
const CareerSwitchTab = () => {
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
          <p className="empower-textfc">Career Switch</p>
          <h1 className="titlewc">Unlock Your Real Potential with Our Services</h1>
          <p className="desctfc"> Our innovative services are designed to enhance your learning experience. From personalized plans to efficient AI assistance, we cater to all your development needs.
          </p>
          <ChevronDown onClick={scrollToFeatures} size={50} className='descriptionfc' />
        </div>
      </section>

      {/* Attach the ref here */}
   
      <section className="feature-container1" ref={featureRef}>
      <div className="feature-gridfc">
        <FeatureCard1
          title="Roadmap Generator"
          description="Build your success path with personalized, step-by-step roadmaps."
          exploreLink="/setGoal"
          btnName="Generate"
        />
        <FeatureCard1
          title="AI Mentor"
          description="Get instant answers and AI-powered guidance anytime."
          exploreLink="/aiMentor"
          btnName="Ask Assistance"
        />
       </div>
    </section>
    <div className='lmr'>
      <button>Learn More</button>
</div>

      <Footer />
    </div>
  );
};

export default CareerSwitchTab;
