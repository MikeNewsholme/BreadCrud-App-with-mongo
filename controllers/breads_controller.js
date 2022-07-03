const express = require('express')
const bread = require('../models/bread.js')
const breads = express.Router()
const Bread = require('../models/bread.js')

//create
breads.post ('/', (req,res)=>{
    if(!req.body.image){
        req.body.image = "https://unsplash.com/photos/s0CTzoewdEs"
    }
    if(req.body.hasGluten === 'on'){
        req.body.hasGluten === 'true'
    } else {
        req.body.hasGluten === 'false'
    }
    bread.push(req.body)
    res.redirect('/breads')
})
//index
breads.get('/', (req,res)=>{
    res.render('index', {
        breads: Bread,
        title: 'Index Page'
})
    //res.send(Bread)
})
//new
breads.get('/new', (req,res)=>{
    res.render('new')
})
//Show
breads.get('/:arrayIndex', (req,res) => {
    if(Bread[req.params.arrayIndex]){
    res.render('show',{
        bread: Bread[req.params.arrayIndex]
    })

} else{
    res.send('404')
}
})

module.exports = breads