import React, { useState, useEffect } from "react";
import CandidateCard from "../components/CandidateCard";
import { Candidate } from "../interfaces/Candidate.interface";
import { searchGithub, searchGithubUser } from "../api/API";
import NavigationBar from "../components/Nav";

const CandidateSearch: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentCandidateIndex, setCurrentCandidateIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    login: "",
    name: "",
    username: "",
    location: "",
    avatarUrl: "",
    email: "",
    htmlUrl: "",
    company: "",
  });

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const data = await searchGithub();
        setCandidates(data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  useEffect(() => {
    if (candidates.length > 0) {
      const currentCandidate = candidates[currentCandidateIndex];
      const fetchCandidateInfo = async () => {
        const user = await searchGithubUser(currentCandidate.login);
        setCurrentCandidate({
          login: user.login,
          name: user.name,
          username: user.login,
          location: user.location,
          avatarUrl: user.avatar_url,
          email: user.email,
          htmlUrl: user.html_url,
          company: user.company,
        });
      };

      fetchCandidateInfo();
    }
  }, [currentCandidateIndex]);

  const handleSave = () => {
    const savedCandidatesStorage = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
    savedCandidatesStorage.push(currentCandidate);
    localStorage.setItem("savedCandidates", JSON.stringify(savedCandidatesStorage));
    setCurrentCandidateIndex((prevIndex) => prevIndex + 1);
  };

  const handleSkip = () => {
    setCurrentCandidateIndex((prevIndex) => prevIndex + 1);
  };

  if (loading) {
    return <div>Loading candidates...</div>;
  }

  if (currentCandidateIndex >= candidates.length) {
    return <div>No more candidates available.</div>;
  }

  return (
    <div className="candidate-search">
      <h1>Candidate Search</h1>

      <CandidateCard
        login={currentCandidate.login}
        name={currentCandidate.name}
        username={currentCandidate.username}
        location={currentCandidate.location}
        avatarUrl={currentCandidate.avatarUrl}
        email={currentCandidate.email}
        htmlUrl={currentCandidate.htmlUrl}
        company={currentCandidate.company}
        onSave={handleSave}
        onSkip={handleSkip}
      />
    </div>
  );
};

export default CandidateSearch;
