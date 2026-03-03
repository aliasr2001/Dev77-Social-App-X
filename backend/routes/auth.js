import express from "express";
import User from "../models/User.js";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";

const router = express.Router();

// Fallback Google ID in case it's missing from .env, but prefer .env
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "797655834756-538cgpogukmfie12slbdlr7vjk75kvut.apps.googleusercontent.com";
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

router.post("/google", async (req, res) => {
    try {
        const { token } = req.body;

        if (!token) {
            return res.status(400).json({ message: "Missing Google token." });
        }

        // 1. Verify the token securely with Google
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: GOOGLE_CLIENT_ID,
        });

        // 2. Extract secure data
        const payload = ticket.getPayload();
        const { sub: googleId, name, email, picture: profilePicture } = payload;

        // 3. Check if user already exists
        let user = await User.findOne({ googleId });

        if (!user) {
            // Check by email natively
            user = await User.findOne({ email });

            if (user) {
                user.googleId = googleId;
                if (!user.profilePicture) user.profilePicture = profilePicture;
                await user.save();
            } else {
                user = new User({
                    googleId,
                    name,
                    email,
                    profilePicture
                });
                await user.save();
            }
        }

        // 4. Generate a secure backend JWT session token
        const secretKey = process.env.JWT_SECRET || "fallback_super_secret_key_change_me_in_production";
        const sessionToken = jwt.sign(
            { userId: user._id, email: user.email },
            secretKey,
            { expiresIn: '7d' } // Token expires in 7 days
        );

        res.status(200).json({
            message: "Authentication successful",
            user,
            token: sessionToken
        });

    } catch (error) {
        console.error("Google Auth Verification Error:", error);
        res.status(401).json({ message: "Invalid or forged Google token" });
    }
});

export default router;
