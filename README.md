# Candidate Search

## Overview

This project is a **candidate search application** designed to enhance the hiring process by leveraging TypeScript with React. The application delivers a robust, maintainable, and scalable solution that calls the GitHub API and renders candidate data in the browser.

The backend API, which retrieves data from the GitHub API, was provided, and the front end has been completed, fully integrated with the API, and deployed to **Render**.

---

## User Story

**As an employer:**  
I want a candidate search application  
So that I can hire the best candidates

---

## Features

- **Candidate Search Page**:
  - Displays information for one candidate, including:
    - Name
    - Username
    - Location
    - Avatar
    - Email
    - GitHub Profile (HTML URL)
    - Company
  - Allows users to:
    - Accept a candidate by clicking the "+" button to save them to the potential candidates list and move to the next candidate.
    - Reject a candidate by clicking the "-" button to skip to the next candidate without saving.
  - Displays a message when no more candidates are available for review.

- **Potential Candidates Page**:
  - Displays a list of previously saved candidates with their details:
    - Name
    - Username
    - Location
    - Avatar
    - Email
    - GitHub Profile (HTML URL)
    - Company
  - Persists the list of saved candidates using local storage, ensuring the list is available even after page reloads.
  - Displays a message when no candidates have been accepted.

---

---

## Setup

### GitHub Personal Access Token

To increase the GitHub API rate limit, a personal access token was created following these steps:

1. Follow [GitHub’s instructions for creating a fine-grained personal access token](https://github.com/settings/tokens).
2. The token was added to a `.env` file in the `environment` folder as `VITE_GITHUB_TOKEN`. An example `.env.EXAMPLE` file was provided for guidance.

---

## Deployment

The application has been successfully deployed to **Render**. See link below

- [Deployed link](https://github-candidate-search-application-1.onrender.com/)


---

## Technologies Used

- **React**
- **TypeScript**
- **GitHub REST API**
- **Local Storage**
- **Render** for deployment

---

## Additional Resources

- [GitHub Documentation on REST API Endpoints for Users](https://docs.github.com/en/rest/reference/users)
- [GitHub Documentation on Authenticating to the REST API](https://docs.github.com/en/rest/overview/other-authentication-methods)
