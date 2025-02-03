import React from 'react';

export default function DataScienceRoadmap() {
  return (
    <div className="container mx-auto p-4rrmp">
      <h1 className="text-3xl font-bold mb-6rrmp">Updated Data Science Learning Roadmap</h1>

      <div className="card mb-6rrmp">
        <div className="card-header">
          <h2 className="card-title">Weak Area Identification</h2>
        </div>
        <div className="card-content">
          <p>Based on the quiz results, the user struggles with:</p>
          <ul className="list">
            <li className="list-item">Identifying key concepts in Data Science</li>
            <li className="list-item">Differentiating between Data Science and Business Intelligence</li>
            <li className="list-item">Correctly identifying examples of Data Science applications and data types</li>
          </ul>
        </div>
      </div>

      <div className="card mb-6rrmp">
        <div className="card-header">
          <h2 className="card-title">Learning Resource Suggestions</h2>
        </div>
        <div className="card-content">
          <p>To improve understanding of key Data Science concepts, we recommend:</p>
          <ul className="list">
            <li className="list-item">
              <a
                href="https://www.datasciencecentral.com/profiles/blogs/data-science-vs-business-intelligence-understanding-the-differences"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Data Science vs Business Intelligence: Understanding the Differences
                <span className="ml-2 h-4 w-4">🔗</span>
              </a>
            </li>
            <li className="list-item">
              <a
                href="https://www.kdnuggets.com/2017/06/data-science-cheat-sheet-visual-guide-key-concepts-tools-techniques.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Data Science Cheat Sheet: A Visual Guide to Key Concepts, Tools, and Techniques
                <span className="ml-2 h-4 w-4">🔗</span>
              </a>
            </li>
            <li className="list-item">
              <a
                href="https://www.coursera.org/learn/data-science-python"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Data Science: An Introduction (Coursera course)
                <span className="ml-2 h-4 w-4">🔗</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Updated Roadmap</h2>
        </div>
        <div className="card-content">
          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-trigger">Week 2: Key Concepts in Data Science</div>
              <div className="accordion-content">
                <ul className="list">
                  <li className="list-item"><strong>Activity:</strong> Read "Data Science: An Introduction" (first module)</li>
                  <li className="list-item"><strong>Key Concepts:</strong> Introduction to key concepts in Data Science, including data types and applications</li>
                  <li className="list-item"><strong>Study Tip:</strong> Take notes on key terms and concepts for future reference</li>
                </ul>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-trigger">Week 4: Data Science Applications and Data Types</div>
              <div className="accordion-content">
                <ul className="list">
                  <li className="list-item"><strong>Activity:</strong> Read "Data Science Cheat Sheet: A Visual Guide to Key Concepts, Tools, and Techniques"</li>
                  <li className="list-item"><strong>Key Concepts:</strong> Understanding Data Science applications and data types, their importance in data science</li>
                  <li className="list-item"><strong>Study Tip:</strong> Look for real-world examples of Data Science applications and data types</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-6rrmp">
        <div className="card-header">
          <h2 className="card-title">Note</h2>
        </div>
        <div className="card-content">
          <p>This roadmap assumes a beginner level of knowledge in data science. Adjust the activities and milestones as needed based on your current skill level and progress.</p>
          <div className="mt-4">
            <a
              href="https://www.youtube.com/results?search_query=data+science"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center"
            >
              Explore related YouTube videos here
              <span className="ml-2 h-4 w-4">🔗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
