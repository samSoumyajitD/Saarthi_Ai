import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import FAQSection from "./FAQ/Faq";
import EducationTools from "./EduTools/EducationTools";
import FeatureSection from "./FeatureSection/FeatureSection";
import Footer from "./Footer/Footer";

function Home() {
  const featureRef = useRef(null); // Create a reference for FeatureSection

  const scrollToFeatures = () => {
    if (featureRef.current) {
      featureRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="nav-links">
          <Link to="/">Home</Link>
          <button className="link-btn" onClick={scrollToFeatures}>Features</button>
        </div>
        <div className="logo">SaarthiAI</div>
        <div className="login-btns">  
          <Link to='student/login'><button className="menu-btn">Student Login</button></Link>
          <Link to='wp/login'><button className="menu-btn">Working Pro Login</button></Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Empower Your Learning Journey!</h1>
          <p>
          Whether you're a student looking to expand your knowledge or a professional striving for career growth, we have tailored solutions just for you. Explore our innovative tools to enhance your learning experience
          </p>
          <div className="buttons">
            <Link to="student/register"><button className="btn primary">Get Started as a Student</button></Link>
            <Link to="wp/register"><button className="btn secondary">Get Started as a Working Professional</button></Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder"></div>
        </div>
      </section>

      <EducationTools />
      <div ref={featureRef}> {/* Attach ref to FeatureSection */}
        <FeatureSection />
      </div>
      <FAQSection />
      <Footer />
    </div>
  );
}

export default Home;
