import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchProfile } from '../../redux/slices/profileSlice';
import { Link } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import "./Profile.css";
import EducationTools from '../Home/EduTools/EducationTools';
import FeatureSectionII from './WorkingFeature/WpFeatureSection';
import FeatureSectionIII from './StudentFeature/StuFeatureSection';

const WpProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.profile.user);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const featureRef = useRef(null); // Create a reference for FeatureSection

  const scrollToFeatures = () => {
    if (featureRef.current) {
      featureRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* Common Navbar */}
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <button className="link-btn" onClick={scrollToFeatures}>Features</button>
        </div>
        <div className="logo">SaarthiAI</div>
        <div className="login-btns">
          <Link to='/dashboard'>
            <button className="menu-btn">{user?.name || 'No name available'}</button>
          </Link>
        </div>
      </nav>

      {/* Conditional Profile Content */}
      {user?.role === 'Working_Pro' ? (
        <div className='wp'>
          <section className="hero">
            <div className="hero-content">
              <h1>Welcome to Your Working Professional Journey!</h1>
              <p>
                If a professional seeking growth, we have tailored solutions just for you. Dive into a world of innovative tools designed to enhance your professional experience.
              </p>
              <div className="buttons">
                <Link to="CareerGrowthTab"><button className="btn primary">Career Growth</button></Link>
                <Link to="UpskillingTab"><button className="btn secondary">Upskilling</button></Link>
                <Link to="CareerSwitchTab"><button className="btn primary">Career Switch</button></Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-placeholder"></div>
            </div>
          </section>
        </div>
      ) : (
        <div className='stu'>
        <section className="hero">
            <div className="hero-content">
              <h1>Welcome to Your Student Learning Journey!</h1>
              <p>
              If you're a student eager to learn, we have tailored solutions just for you. Dive into a world of innovative tools designed to enhance your educational experience.   </p>
              <div className="buttons">
                <Link to="AcademicTab"><button className="btn primary">Academic </button></Link>
                <Link to="StudentCareerTab"><button className="btn secondary">Career</button></Link>
             
              </div>
            </div>
            <div className="hero-image">
              <div className="image-placeholder"></div>
            </div>
          </section>
        </div>
      )}

      {/* Common EducationTools Component */}
      <div className='common-education-tools'>
        <EducationTools />
      </div>
      {user?.role === 'Working_Pro' ? (
        <div className='wp'>
        <div ref={featureRef}>
        <FeatureSectionII />
      </div>
        </div>
      ) : (
        <div className='stu'>
        <div ref={featureRef}>
        <FeatureSectionIII />
      </div>
        </div>
      )}

      {/* Feature Section */}
    

      {/* Common Footer */}
      <Footer />
    </>
  );
};

export default WpProfile;
