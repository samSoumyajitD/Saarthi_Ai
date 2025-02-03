import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import "./Faq.css";

export default function FAQSection() {
  const [activeItem, setActiveItem] = useState(null);

  const toggleItem = (item) => {
    setActiveItem(activeItem === item ? null : item);
  };

  // List of questions and answers
  const faqList = [
    {
      id: "item-1",
      question: "What is AI Professor?",
      answer:
        "AI Professor is an intelligent tool designed to provide subject-specific query resolution, helping students get instant answers and boost their understanding."
    },
  
    {
      id: "item-2",
      question: "What is Roadmap Generator?",
      answer:
        "The Roadmap Generator creates chapter-wise study plans tailored to individual learning needs."
    },
    {
      id: "item-3",
      question: "Is there a cost?",
      answer:
        "Our basic tools are available for free, while premium features may have associated costs."
    },
    {
      id: "item-4",
      question: "Can I get support?",
      answer:
        "Yes, we offer comprehensive support for all users. You can reach out via our contact page for assistance."
    }
  ];

  return (
    <div className="faq-container">
      <div className="faq-header">
        <h1>FAQs</h1>
        <p>Find answers to common questions about our tools and services.</p>
      </div>

      <div className="accordion">
        {faqList.map((faq) => (
          <div key={faq.id} className="accordion-item">
            <div className="accordion-trigger" onClick={() => toggleItem(faq.id)}>
              <h2>{faq.question}</h2>
              <span className="accordion-icon">
                {activeItem === faq.id ? <X size={30} /> : <ChevronDown size={30} />}
              </span>
            </div>
            {activeItem === faq.id && (
              <div className="accordion-content">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="contact-section">
        <h2>Need Help? Get in Touch!</h2>
        <p>Our team is here to support you.</p>
        <button className="contact-btn">Contact</button>
      </div>
    </div>
  );
}
