import { Router } from "express";

import bcrypt from 'bcrypt';

import User from "../models/users.js";

const router = new Router();

const SALT_ROUNDS = 10;

/**
 * GET /
 * @description returns all users
 */
router.get("/", async (req, res) => {
    const users = await User.find({});
    res.status(200).json(users);
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
router.post("/signup", async (req, res) => {
console.log(req.body);
try {
    const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS);
    const user = await User.create({ ...req.body, password: hashedPassword });    
res.status(203).json(user);

} catch (error) {
console.log(error);
}
});



/**
 * POST /SignIn
 * @description Log in a user
 */
router.post("/signin", async (req, res) => {
    try {
        const { email, password } = req.body;
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        // Compare password
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(401).json({ msg: "Invalid credentials" });
        }
        // If user and password are correct, return user data
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Server Error" });
    }
});

/**
 * PUT /:id
 * to update the user's information
 */
router.put("/:id", async (req, res) => {
try {
    const { id } = req.params;
    const { body } = req;

    //! Stops request from updating the user's password
    if (body.password) {
    delete body.password;
    console.log('Password removed from body');
    }

    const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });
    res.json(updatedUser);

} catch (error) {
    console.log(error);
    res.json({msg: 'User Not found!'})
}
});

/**
 * DELETE /:id
 */
router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        res.json({msg: "User deleted", deletedUser});
    } catch (error) {
        console.log(error);
    }
});
  
export default router;