import React from "react";
import { Box } from "lucide-react";
import { Link } from "react-router-dom";
import "./FeatureSection.css";

function FeatureCard({ title, description, exploreLink, learnMoreLink }) {
  return (
    <div className="feature-card">
      <Box className="iconfc" />
      <h2 className="titlefc">{title}</h2>
      <p className="description3">{description}</p>
      <div className="actions">
        <Link to={exploreLink} className="btnfc">Explore</Link>
        <Link to={learnMoreLink} className="learn-more">Learn More →</Link>
      </div>
    </div>
  );
}

export default function FeatureSection() {
  return (
    <section className="feature-container">
      <div className="feature-grid">
       
      <FeatureCard
  title="AI Professor: Your 24/7 Study Buddy"
  description="Instant answers, expert guidance—AI support anytime you need it."
  exploreLink=""
  learnMoreLink=""
/>

<FeatureCard
  title="Roadmap Generator: Build Your Success Path"
  description="Create step-by-step plans tailored to your goals—achieve smarter, not harder."
  exploreLink=""
  learnMoreLink=""
/>

<FeatureCard
  title="Knowledge Assessment: Track & Grow"
  description="Measure progress, master skills, and stay ahead effortlessly."
  exploreLink=""
  learnMoreLink=""/>
      </div>
    </section>
  );
}
