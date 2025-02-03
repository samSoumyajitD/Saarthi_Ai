import React, { useState, useEffect } from "react";
import { Box } from "lucide-react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie"; // Import js-cookie library
import "./FeatureSection2.css";

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

function FeatureCard2({ title, description, exploreLink, btnName }) {
  const [role, setRole] = useState(""); 


  useEffect(() => {
    const userRole = Cookies.get("role"); 
    if (userRole) {
      setRole(userRole); // Set the role from cookies
    }
  }, []);

  // Dynamically set exploreLink based on the role
  const handleExploreLink = () => {
    if (role === "Student") {
      return "/studentProfile"; 
    } else if (role === "Working_Pro") {
      return "/workingProfenalProfile"; 
    }
    return exploreLink; 
  };

  return (
    <div className="feature-card">
      <Box className="iconfc" />
      <h2 className="titlefc1">{title}</h2>
      <p className="description3">{description}</p>
      <div className="actions1">
        {/* Update the link based on the role */}
        <Link to={handleExploreLink()} className="btnfc">
          {btnName}
        </Link>
      </div>
    </div>
  );
}

const FeatureC = () => {
  return (
    <section className="feature-container1">
      <div className="feature-gridfc">
      <FeatureCard1
  title="Build Your Unique Profile: Tailored Just for You"
  description="Create custom profile in minutes—your teaching, your way!"
  exploreLink="/interativeProfileBuilding"
  btnName="Start Building"
/>
<FeatureCard2
  title="Keep the Momentum Alive: Continue Learning!"
  description="Stay curious, and never stop growing—you are just getting started!"
  exploreLink="" // Initial empty exploreLink
  btnName="Keep Learning →"
/>
      </div>
    </section>
  );
};

export default FeatureC;
