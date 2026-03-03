# Backend & Authentication: Technical Breakdown

This document provides a detailed, file-by-file explanation of the Node.js backend we built and how it connects to your React frontend to handle Google Sign-In.

---

## 1. The Core Server (`backend/server.js`)

This file is the entry point of your backend application. It's essentially the "engine" that runs everything.

**Key Concepts Explained:**
* **`express`**: A framework for Node.js that makes it easy to build APIs. It listens for HTTP requests (like `GET` or `POST`) from your frontend.
* **`cors`**: (Cross-Origin Resource Sharing) Your frontend runs on port `5173`, but your backend runs on port `5001`. Browsers block communication between different ports by default for security. `cors()` tells the browser "It's okay, let the frontend talk to the backend."
* **`mongoose`**: A library that lets Node.js talk to MongoDB easily. It translates JavaScript objects into MongoDB documents.
* **`dotenv`**: A tool that loads secret variables (like your `MONGODB_URI` password) from the `.env` file so they aren't hardcoded directly in your code.

**How it works:**
1. It starts by loading your secret environment variables.
2. It turns on `express` and allows it to understand JSON data sent from the frontend.
3. It registers the routes we created (e.g., telling the server that anything going to `/api/auth` should be handled by `routes/auth.js`).
4. It connects to MongoDB using your URI connection string.
5. Finally, it starts listening on port `5001`.

---

## 2. The Database Blueprint (`backend/models/User.js`)

MongoDB is a "NoSQL" database, which means it doesn't strictly care what data you put into it. However, to keep our app organized and bug-free, we want to enforce rules. We do this using a **Mongoose Schema**.

**What this file does:**
It tells MongoDB exactly what a "User" should look like. 
* `googleId`: Must be a String, is required, and must be unique (no two users can have the same Google ID).
* `name`: Must be a String.
* `email`: Must be a String, is required, and must be unique.
* `profilePicture`: An optional String (URL to the Google image).
* `timestamps: true`: Automatically adds `createdAt` and `updatedAt` dates to every user so we know when they joined.

---

## 3. The Authentication Brain (`backend/routes/auth.js`)

This is where the actual logic for logging a user in happens. 

**The flow when `POST /api/auth/google` is called by the frontend:**
1. **Receive Data**: The frontend sends the user's Google Profile data inside `req.body` (Request Body). We extract their name, email, googleId (`sub`), and picture.
2. **Missing Data Check**: If the frontend forgot to send an email or googleId, we immediately return a `400 Bad Request` error.
3. **Database Search (`User.findOne`)**: We ask MongoDB: *"Do you have a user with this specific `googleId`?"*
4. **Logic Fork**:
   - **If the user IS found**: Great! They already have an account. We skip creation and just say "Authentication successful".
   - **If the user IS NOT found**: 
     - We check if maybe they have an account under the same *email* but haven't linked Google yet.
     - If they *are* found by email, we update their account to securely link their new `googleId`.
     - If they *are not* found by email either, this is a brand new user! We create a new `new User(...)` object and run `user.save()` to write it into MongoDB permanently.
5. **Response**: Finally, we send a `200 OK` status back to the frontend, along with the user's data from the database.

---

## 4. The Frontend Gatekeeper (`socialAppX/src/components/ProtectedRoute.jsx`)

Now that the backend is working, the frontend needs a way to actually restrict who can see the Home page.

**What this file does:**
It's a "Wrapper Component". In `main.jsx`, we wrap `<Home/>` inside `<ProtectedRoute>`. 
* When a user tries to visit the Home page, `<ProtectedRoute>` runs first.
* It checks the Browser's `localStorage` for an item called `'user'`.
* If it **doesn't** find a user, it instantly redirects (`<Navigate>`) them back to the `/login` page.
* If it **does** find a user, it returns `children` (which is the `<Home/>` component), allowing them to view the site.

---

## 5. Connecting the Dots (`socialAppX/src/components/LoginWithGoogle.jsx`)

This is where the user clicks the actual Google Button.

**How `handleCredentialResponse` was updated:**
1. When the user successfully logs into Google via the popup, Google gives the frontend a secure JWT token.
2. We decode that token to get their raw Name, Email, and Picture.
3. We open a `fetch()` request (a network connection) and explicitly `POST` that data to our new backend `http://localhost:5001/api/auth/google`.
4. We wait for the backend to reply.
5. When the backend replies with "Authentication successful", we take the user data the backend sent us and save it permanently into the browser using `localStorage.setItem("user", JSON.stringify(data.user))`.
6. Finally, we tell React Router to immediately redirect the browser to the Home page (`navigate('/')`). Because the user is now in `localStorage`, the `<ProtectedRoute>` lets them through!
