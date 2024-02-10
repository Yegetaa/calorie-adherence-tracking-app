import { Router } from "express";

import CalorieConsumption from "../models/calories.js";

const router = new Router();

/**
 * GET /
 * @description retrieves all daily calorie consumption entries for a user
 */

router.get('/api/calories', async (req, res) => {
    try {
      const calories = await CalorieConsumption.find({ user: req.user._id });
      res.json(calories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  });
  

/**
 * POST /
 * @description to add a new daily calorie consumption entry
 */

/**
 * PUT /
 * @description to update a specific daily calorie consumption entry
 */

/**
 * DELETE /
 * @description to delete a specific daily calorie consumption entry by its ID
 */

export default router;