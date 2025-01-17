import { useState, useEffect } from "react";
import { Candidate } from "../interfaces/Candidate.interface";

const SavedCandidates = () => {
  // State to hold saved candidates
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  // Load saved candidates from localStorage on component mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
    setSavedCandidates(savedData);
  }, []);

  // Function to remove a candidate
  const handleRemove = (candidateIndex: number) => {
    const updatedCandidates = savedCandidates.filter((_, index) => index !== candidateIndex);
    setSavedCandidates(updatedCandidates);
    localStorage.setItem("savedCandidates", JSON.stringify(updatedCandidates));
  };

  return (
    <div className="saved-candidates">
      <h1>Saved Candidates</h1>
      {savedCandidates.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Username</th>
              <th>Location</th>
              <th>Email</th>
              <th>Company</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {savedCandidates.map((candidate, index) => (
              <tr key={index}>
                <td>
                  <img src={candidate.avatarUrl} alt={`${candidate.name}'s avatar`} width="50" />
                </td>
                <td>{candidate.name || "N/A"}</td>
                <td>{candidate.username}</td>
                <td>{candidate.location || "N/A"}</td>
                <td>{candidate.email}</td>
                <td>{candidate.company || "N/A"}</td>
                <td>
                  <button onClick={() => handleRemove(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No saved candidates.</p>
      )}
    </div>
  );
};

export default SavedCandidates;

