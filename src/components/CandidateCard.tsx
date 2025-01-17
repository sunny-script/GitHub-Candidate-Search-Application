// component for displaying individual candidate information. This can be reused in both the CandidateSearch and SavedCandidates components.

import React from 'react';
import { Candidate } from '../interfaces/Candidate.interface'; // Import the Candidate interface

// Extend the Candidate interface for the props
interface CandidateCardProps extends Candidate {
  onSave: () => void; // Callback for saving the candidate
  onSkip: () => void; // Callback for skipping the candidate
}

const CandidateCard: React.FC<CandidateCardProps> = ({
  name,
  username,
  location,
  avatarUrl,
  email,
  htmlUrl,
  company,
  onSave,
  onSkip,
}) => {
  return (
    <div className="candidate-card">
      <img src={avatarUrl} alt={`${name}'s avatar`} className="candidate-avatar" />
      <h3>{name}</h3>
      <p>Username: {username || "Username not available"}</p>
      <p>Location: {location || "Location not available"}</p>
      <p>Email: {email || "Email not available"}</p>
      <p>Company: {company || "Company not available"}</p>
      <a href={htmlUrl} target="_blank" rel="noopener noreferrer">View Profile</a>
      <div className="candidate-actions">
        <button onClick={onSave}>+</button>
        <button onClick={onSkip}>-</button>
      </div>
    </div>
  );
};

export default CandidateCard; // Export the CandidateCard component