import React from 'react';
import {Link} from 'react-router-dom'
import './Evaluation.css'
export default function EvaluationPage() {
  return (
    <div className="container-eval">
      <div className="card-eval">
        <div className="card-header-eval">
          <h2 className="card-title-eval">Your Evaluation</h2>
        </div>
        <div className="card-content-eval">
          <div className="score-eval">
            <span className="score-number-eval">3/10</span>
          </div>
          <div className="progress-bar-eval">
            <div className="progress-eval" style={{ width: '30%' }}></div>
          </div>
          <p className="progress-text-eval">There's scope to improve. Keep learning and practicing!</p>
        </div>
        <div className="card-footer-eval">
          <Link to='/UpdatedRoadmap'><button className="btn-eval">Update Your Roadmap</button></Link>
        </div>
      </div>
    </div>
  );
}
