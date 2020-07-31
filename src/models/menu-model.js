const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schema = new Schema({
    nome:{
        type: String,
        required: true,
        trim: true
    },
    preco:{
     type: Number,
     required: true,
     trim: true
    },
    
    imagem:{
        type: String,
        required: true,
        trim: true
    },
    restaurante:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
})

module.exports = mongoose.model('Menu', schema)