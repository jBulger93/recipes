var path = require ('path')

require('dotenv').config({
    path: path.join(__dirname, 'settings.env')
})

var mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {
    useMongoClient: true
} ,function (error){
    console.log(error)
})

var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true  }))
app.use(bodyParser.json())

require('./controllers/recipesController')(app)

app.listen(4000, function () {
    console.log('listening on port 4000')
})