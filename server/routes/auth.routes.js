import express from 'express';
import bcrypt, { decodeBase64 } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'User already exist' });

        const hashedPassword = await bcrypt.hash(password, 10);

        user = new User({ name, email, password: hashedPassword });
        await user.save();

        res.status(201).json({ message: "user registered successfully" });
    } catch (error) {
        console.error('Error in signup route', error)
        res.status(500).json({ message: "Server error" });
    }
});

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password)
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ "Message": "User does not exist!! Please signup!!" })
        }
        console.log(user)
        const isPasswordSame = await bcrypt.compare(password, user.password);
        if (!isPasswordSame) {
            return res.status(403).json({ 'Message': 'Invalid Password!!' })
        }
        const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' });
        return res.status(200).json({ 'Message': "Signed in successfully", token })
    } catch (error) {
        console.log('Error in signin', error);
        res.status(500).json({ 'Message': "Internal Server Error in signing in user!!" })
    }
})

router.get('/profile', authMiddleware, async (req, res) => {
    try {
        const email = req.email;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ 'Message': 'User not found!! Please signin!!' })
        }
        res.status(200).json({ 'Message': 'User found successfully!!', user });
    } catch (error) {
        console.log("error", error);
        res.status(500).json({ 'Message': "Internal Server Error in signing in user!!" })
    }
});



export default router;