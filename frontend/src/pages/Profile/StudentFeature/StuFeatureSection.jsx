import React from "react";
import { Box } from "lucide-react";
import { Link } from "react-router-dom";
import "./StuFeatureSection.css";

function FeatureCardst({ title, description, exploreLink, learnMoreLink }) {
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

const FeatureSectionIII = () => {
  return (
    <section className="feature-container">
      <div className="feature-grid">
      <FeatureCardst
  title="Roadmap Generator"
  description="Build your success path with personalized, step-by-step roadmaps."
  exploreLink=""
  learnMoreLink=""
/>

<FeatureCardst
  title="AI Professor"
  description="Get instant answers and AI-powered guidance anytime."
  exploreLink=""
  learnMoreLink=""
/>

<FeatureCardst
  title="Knowledge Assessment"
  description="Track progress and master your skills effortlessly."
  exploreLink=""
  learnMoreLink=""/>
      </div>
    </section>
  );
}
export default FeatureSectionIII;