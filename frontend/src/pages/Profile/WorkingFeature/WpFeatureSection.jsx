import React from "react";
import { Box } from "lucide-react";
import { Link } from "react-router-dom";
import "./WpFeatureSection.css";

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

const FeatureSectionII = () => {
  return (
    <section className="feature-container">
      <div className="feature-grid">
        <FeatureCard
          title="Roadmap Generator"
          description="Build your success path with personalized, step-by-step roadmaps."
          exploreLink=""
          learnMoreLink=""
        />
        <FeatureCard
          title="AI Mentor"
          description="Your 24/7 mentor—instant answers and AI-powered support anytime."
          exploreLink=""
          learnMoreLink=""
        />
        <FeatureCard
          title="Knowledge Assessment"
          description="Track progress and master your skills effortlessly."
          exploreLink=""
          learnMoreLink=""
        />
      </div>
    </section>
  );
}
export default FeatureSectionII;