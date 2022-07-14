//const { application } = require('express')
const express = require('express')
require ('dotenv').config()
const PORT = process.env.PORT
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongo: ", process.env.MONGO_URI);
  }
);

console.log(PORT)

//Middleware
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.set('views',__dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())



//Routes
app.get('/', (req, res) =>{
    res.send("Welcome to my app about BREAD$")
})
//Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

//bakers
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

//404 page
app.get('*', (req,res) =>{
    res.send('404')
})

app.listen(PORT, () =>{
    console.log('nomming at port', PORT)
})