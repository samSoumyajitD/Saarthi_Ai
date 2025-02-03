import React from "react";
import "./Aside.css";

const Aside = ({ title, children }) => {
  return (
    <aside className="aside-container">
      <h2>{title}</h2>
      <div className="aside-content">{children}</div>
    </aside>
  );
};

export default Aside;
