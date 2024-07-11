const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipes');
const verifyToken = require('../middleware/authMiddleware');

router.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    res.json(recipes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});

router.get('/recipes/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findOne({ recipeId: req.params.id });
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch recipe' });
  }
});

router.post('/recipes', async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).json(recipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create recipe' });
  }
});

router.put('/recipes/:id', verifyToken, async (req, res) => {
  try {
    const recipe = await Recipe.findOneAndUpdate(
      { recipeId: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update recipe' });
  }
});

router.delete('/recipes/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findOneAndDelete({ recipeId: req.params.id });
    if (!recipe) {
      return res.status(404).json({ error: 'Recipe not found' });
    }
    res.json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete recipe' });
  }
});

module.exports = router;
