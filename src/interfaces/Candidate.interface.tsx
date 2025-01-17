// DONE: Create an interface for the Candidate objects returned by the API
export interface Candidate {
    login: string;
    name: string;        // The full name of the candidate
    username: string;    // The GitHub username of the candidate
    location: string;    // The location of the candidate
    avatarUrl: string;   // The URL to the candidate's avatar image
    email: string;       // The email address of the candidate
    htmlUrl: string;     // The URL to the candidate's GitHub profile
    company: string;     // The company the candidate is associated with
  }