const { Schema} =require('mongoose');
const { model} =require('mongoose');

const recipeSchema = new Schema({
   recipeId: { type: String, required: true },
   title: { type: String, required: true },
   ingredients: { type: String, required: true },
   instructions: { type: String, required: true },
   
});

const recipes = model('recipes', recipeSchema);

module.exports = recipes;
