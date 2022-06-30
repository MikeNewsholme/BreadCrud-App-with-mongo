const { application } = require('express')
const express = require('express')
require ('dotenv').config()
const PORT = process.env.PORT
const app = express()
console.log(PORT)

//Routes
app.get('/', (req, res) =>{
    res.send("Welcome to my app about BREAD$")
})
//Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

app.listen(PORT, () =>{
    console.log('nomming at port', PORT)
})