//require mongoose
const mongoose = require("mongoose");

//creating short hand for the Schema constructor
const { Schema } = mongoose

const Bread = require('./bread')

//My Schema
   const bakerSchema = new Schema({
    name: {
        type : String,
        required : true,
        enum: ['Rachel', 'Monica', 'Joey', "Chandler", 'Ross', 'Phoebe'
    ]
        
    },
     startDate : {
        type: Date,
        required : true
     },
     bio : String
     
     
     }, { toJSON: { virtuals: true}})

//virtuals
bakerSchema.virtual('breads',{
   ref: 'Bread',
   localField:"_id",
   foreignField: "baker"
})

   //model and export

   const Baker = mongoose.model('Baker', bakerSchema)
   module.exports = Baker