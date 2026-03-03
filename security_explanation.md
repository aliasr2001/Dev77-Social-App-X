# Security Enhancements: Technical Breakdown

This document provides a detailed explanation of the security flaws identified in the original backend architecture and how we fixed them to make the application secure.

---

## 1. Authentication Forgery Fix (JWT Verification)

**The Flaw:**
Initially, the React frontend decoded the Google token and sent plain text data (name, email, unique ID) to the backend. The backend unconditionally trusted this data. A malicious user could use a tool like Postman to send fake data to `POST /api/auth/google` and successfully log in or create an account as someone else (like an admin).

**The Fix (`backend/routes/auth.js` & `LoginWithGoogle.jsx`):**
* **Frontend:** Instead of decoding the token, the frontend now sends the raw, encrypted `credential` token directly to the backend.
* **Backend (`google-auth-library`):** We installed Google's official library. The backend now takes that token and mathematically verifies it against Google's servers using your Google Client ID. It ensures the token hasn't been tampered with and was actually issued by Google. If it's valid, the backend extracts the verified email and ID and proceeds.

## 2. Session Management (Local JWT Issue)

**The Flaw:**
Once the user logged in, the backend relied entirely on the frontend saving the user data in `localStorage`. If we added routes that required the user to be logged in (like making a post or changing a profile picture), the backend wouldn't have a secure way to verify if the request was authentic.

**The Fix (`jsonwebtoken`):**
* When a user successfully logs in, the backend now generates its own secure `JSON Web Token (JWT)`.
* It signs this token using a `JWT_SECRET` key that only the backend knows.
* This token contains the user's permanent MongoDB `_id`.
* The frontend receives this token and saves it in `localStorage`. In the future, the frontend can attach this token to any protected requests so the backend can instantly verify the user's identity without asking the database every time.

## 3. Protecting the API (CORS)

**The Flaw:**
By default, `cors()` in `server.js` was open to the public. Any website on the internet could technically make a request to your backend API. This opens up the risk of Cross-Site Request Forgery (CSRF).

**The Fix (`backend/server.js`):**
* We restricted the `cors` middleware to only accept requests originating strictly from `http://localhost:5173` (your React frontend).

## 4. Securing Secrets (.env)

**The Flaw:**
Your Google `client_id` was hardcoded directly as a string inside your React component `LoginWithGoogle.jsx`. Putting secrets in code files is dangerous because they can be exposed if the code is shared or pushed to a public repository like GitHub.

**The Fix (`.env`):**
* We created a `.env` file in the frontend folder and moved the ID there as `VITE_GOOGLE_CLIENT_ID`. The code now securely references `import.meta.env.VITE_GOOGLE_CLIENT_ID`, keeping your credentials hidden from the raw source code.
