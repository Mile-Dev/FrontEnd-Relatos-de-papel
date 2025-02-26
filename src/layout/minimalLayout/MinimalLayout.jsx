import React from "react";
import "./MinimalLayout.css";

const MinimalLayout = ({ children }) => {
  return (
    <div className="minimal-layout">
      <main className="minimal-layout__main">{children}</main>
    </div>
  );
};

export default MinimalLayout;
