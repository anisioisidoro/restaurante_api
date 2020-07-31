const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const schema = new Schema({
    
    // dataCriacao:{
    //      type: String,
    //      default: 
    //  },

     dataReserva:{
         type: String,
         required: true,
         trim: true
     },
     horaReserva:{
        type: String,
        required: true,
        trim: true
    },
     
     
     usuario:{
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User'
     },
     restaurante:{
         type: mongoose.Schema.Types.ObjectId,
         ref: 'Restaurant'
     },
     estado: {
         type: Number,
         trim: true
     }

})

module.exports = mongoose.model('Reserve', schema)