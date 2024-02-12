import { Router } from "express";

import CalorieConsumption from "../models/calories.js";

const router = new Router();

/**
 * GET /
 * @description retrieves all daily calorie consumption entries for a user
 */

router.get('/', async (req, res) => {
  try {
      // Check if user is authenticated and user object exists
      if (!req.user || !req.user._id) {
          return res.status(401).json({ message: 'Unauthorized' });
      }

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
router.post('/', async (req, res) => {
  try {
    const newCalorie = new CalorieConsumption({
      user: req.user._id,
      calories: req.body.calories,
      date: req.body.date
    });
    const calories = await newCalorie.save();
    res.json(calories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

/**
 * PUT /
 * @description to update a specific daily calorie consumption entry
 */

router.put('/:id', async (req, res) => {
  try {
    const calories = await CalorieConsumption.findByIdAndUpdate(
      req.body.id,
      req.body,
      { new: true }
    );
    res.json(calories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

/**
 * DELETE /
 * @description to delete a specific daily calorie consumption entry by its ID
 */

router.delete('/:id', async (req, res) => {
  try {
    const calories = await CalorieConsumption.findByIdAndDelete(req.body.id);
    res.json(calories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;