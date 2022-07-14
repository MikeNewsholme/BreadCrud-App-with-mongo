//require mongoose
const mongoose = require("mongoose");

//creating short hand for the Schema constructor
const { Schema } = mongoose


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
     
     
     }
   )

   //model and export

   const Baker = mongoose.model('Baker', bakerSchema)
   module.exports = Baker