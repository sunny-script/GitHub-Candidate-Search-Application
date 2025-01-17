import React from "react";
import { Link } from "react-router-dom";

const NavigationBar: React.FC = () => {
  return (
    <nav style={{ marginBottom: "20px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
      <Link to="/CandidateSearch" style={{ marginRight: "15px" }}> Candidate Search</Link>
      <Link to="/SavedCandidates">Saved Candidates</Link>
    </nav>
  );
};

export default NavigationBar;
