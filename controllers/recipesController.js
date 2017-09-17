var Recipe = require('../models/Recipe')

function recipesController (app) {
    app.delete('/recipes/:recipeId', function (req, res) {
        Recipe.remove({ _id: req.params.recipeId }, function (error, rawResponse) {
            if (error) {
                res.send({ error: 'Unable to remove recipe.' })

                return
            }

            res.send(rawResponse)
        })
    })
    app.put('/recipes/:recipeId', function (req, res) {
        Recipe.update({ _id: req.params.recipeId }, { $set: req.body }, function (error, rawResponse) {
           if (error) {
                res.send({ error: 'Unable to update recipe.' })

                return 
           } 
           res.send(rawResponse)
        })
    })
    app.get('/recipes/:recipeId', function (req, res) {
       Recipe.findOne({ _id: req.params.recipeId }, function (error, recipes) {
           if (error) {
                res.send({ error: 'unable to retrieve recipes.' })

                return
           }

           res.send(recipes)
       }) 
    })
    app.post('/recipes', function (req, res) {
        console.log('posted to recipes')
       var recipe = Recipe(req.body)

        recipe.save(function (error, savedRecipe) {
            if (error) {
                res.send({
                    error: 'unable to perform request. an error occured'
                })
                
                return
            }
                res.send({ _id: savedRecipe._id })
        })
    })
}

module.exports = recipesController
