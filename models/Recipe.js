var mongoose = require('mongoose')

var recipeSchema = new mongoose.Schema({
    name: String,
    ingredients: [{
        name: String,
        quantity: Number,
        unit: String
    }],
    instructions: String
})

var Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe