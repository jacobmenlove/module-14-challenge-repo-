# module-14-challenge-  

Kanban Board Application with JWT Authentication
- Authentication with JSON Web Tokens (JWTs) is crucial for full-stack applications, providing a secure and scalable method for verifying user identities. JWTs are compact, URL-safe tokens that encode a user's authentication data, allowing the server to authenticate requests. They also enable seamless and secure authentication across various parts of an application.

Project Overview
- This Kanban board application allows users to securely manage their tasks with the integration of JWT-based authentication. The challenge is to add JWT authentication to the existing Kanban board, ensuring secure login functionality and smooth user experience.

User Story
- As a member of an agile team, I want a Kanban board with a secure login page so that I can securely access and manage my work tasks.

Acceptance Criteria
- Login Page:
The login page provides form inputs for the username and password.
When valid credentials are entered, the user is authenticated using JWT and redirected to the main Kanban board page.
If invalid credentials are entered, an error message is displayed.
- JWT Storage:
Upon successful login, a JWT is securely stored in the client's local storage for future authenticated requests.
- Logout:
Logging out removes the JWT from local storage and redirects the user to the login page.
- Access Control:
Attempting to access the Kanban board page without authentication redirects the user to the login page.
- Session Timeout:
After a period of inactivity, the session expires, and the JWT is invalidated, requiring re-authentication.
Application Mock-Up
The application includes:

A Login Required page that prompts unauthenticated users to log in.
A Login Page where users can enter their credentials.
A Main Kanban Board Page where tasks are displayed in three columns based on their status.

Getting Started
Prerequisites
- Ensure you have the following installed:

Node.js
PostgreSQL
Render account
Setup Instructions
Download the Starter Code
Download and unzip the starter code, then create your own repository.

- Create .env File
In the root of the server folder, create a .env file with the following environment variables:

DB_USERNAME: The PostgreSQL username
DB_PASSWORD: The PostgreSQL password
JWT_SECRET: A random string used as the secret key for signing JWTs
Server-Side Development:

- Complete the authenticateToken method in server/src/middleware/auth.ts to validate the JWT on each request.
Implement the login method in server/src/routes/auth-routes.ts to handle user authentication and JWT generation.
Add JWT authentication to necessary routes in server/src/routes/index.ts to protect specific endpoints.
Client-Side Development:

- Complete the login method in client/src/api/authAPI.tsx to send login requests to the server.
Implement the necessary methods in client/src/utils/auth.ts to handle login, logout, and token management in local storage.

- Testing:

Use Insomnia or Postman to test the server API.
Import the provided Insomnia request collection for easy testing.
Deployment:

Follow the Deploy with Render and PostgreSQL guide to deploy your application on Render.
Set the environment variables (DB_USERNAME, DB_PASSWORD, JWT_SECRET) in Render using the platform's environment variable settings.
Key Features
JWT-Based Authentication: Securely verify users and manage session-based authentication with JWTs.
Kanban Board: Users can view tasks organized into columns (e.g., To Do, In Progress, Done).
Protected Routes: The Kanban board page and task management features are protected by authentication.
Session Expiry: User sessions expire after inactivity, requiring re-authentication.
Hints and Tips
Testing: Use Insomnia to directly test your API. Download the pre-configured JSON file for easy setup.
Environment Variables: Refer to Render's documentation for managing environment variables during deployment.