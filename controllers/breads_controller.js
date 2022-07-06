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
//edit form
breads.get('/:arrayIndex/edit',(req,res) =>{
    res.render('edit', {
        bread: Bread[req.params.arrayIndex],
        index: req.params.arrayIndex
    })
})
//Show
breads.get('/:arrayIndex', (req,res) => {
    if(Bread[req.params.arrayIndex]){
    res.render('show',{
        bread: Bread[req.params.arrayIndex],
        index: req.params.arrayIndex,
    })

} else{
    res.send('404')
}
})
//edit form
breads.get('/:arrayIndex/edit',(req,res) =>{
    res.render('edit', {
        bread: Bread[req.params.arrayIndex],
        index: req.params.arrayIndex
    })
})
//delete
breads.delete('/:arrayIndex', (req,res)=>{
    Bread.splice(req.params.arrayIndex,1)
    res.status(303).redirect('/breads')
})

//update
breads.put('/:arrayIndex', (req,res) =>{
    if(req.body.hasGluten === 'on'){
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread[req.params.arrayIndex] = req.body
    res.redirect(`/breads/${req.params.arrayIndex}`)
})

module.exports = breads