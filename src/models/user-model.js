const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schema = new Schema({
    nome:{
        type: String,
        required: true,
        trim: true
    },
    senha:{
        type: String,
        required: true,
        trim: true
    },
    telemovel:{
        type: Number,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('User', schema);