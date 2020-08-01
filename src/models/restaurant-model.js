const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const schema = new Schema({
    nome:{
        type: String,
        requires: true,
        trim: true
    },
    municipio:{
        type: String,
        required: true,
        trim: true
    },
    website:{
        type: String,
        trim: true,
        
    },
    imagem:{
        type: String,
        required: true,
        trim: true
    },
    telemovel:{
        type: Number,
        trim: true
    },

    latitude:{
        type: String,
        trim: true
    },

    longitude:{
        type: String,
        trim: true
    }
})

module.exports = mongoose.model('Restaurant', schema)