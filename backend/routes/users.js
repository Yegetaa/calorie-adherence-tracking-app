import { Router } from "express";

import bcrypt from 'bcrypt';

import User from "../models/users.js";

const router = new Router();

// const SALT_ROUNDS = 10;

/**
 * GET /
 * @description returns all users
 */
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
/**
 * GET /:id
 * @description returns a user by id
 */
router.get("/:id", async (req, res) => {
const user = await User.findById(req.params.id);

if (!user) return res.status(404).json({ msg: "Resource not found!" });
else res.json(user);
});
  
/**
 * POST /
 * @description creates a new user 
 */
router.post('/signup', async (req, res) => {
    const user = new User({
        //_id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: req.body.password,
        calorieTarget: req.body.calorieTarget
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});



/**
 * POST /SignIn
 * @description Log in a user
 */
router.post('/signin', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        res.json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * PUT /:id
 * to update the user's information
 */
router.put('/:id', async (req, res) => {
    if (req.body.email != null) {
        res.user.email = req.body.email;
    }
    if (req.body.password != null) {
        res.user.password = req.body.password;
    }
    if (req.body.calorieTarget != null) {
        res.user.calorieTarget = req.body.calorieTarget;
    }
    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

/**
 * DELETE /:id
 */
router.delete('/:id', async (req, res) => {
    try {
        await res.user.remove();
        res.json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



export default router;