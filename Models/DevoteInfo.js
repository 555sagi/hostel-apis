const mongoose = require('mongoose');

const DevoteSchema =  new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    userFatName:{
        type:String,
        required:true,

    },
    userMobNum:{
    type:Number,
    required:true,
    unique:true
    },
    userFatNum:{
        type:Number,
        required:true,
        unique:true
    },
    userAdharNum:{
        type:String,
        required:true,
        unique:true
    },
    userImage:{
        type:Buffer,
        contentType:String,
        required:true
    }



})

const Devote = mongoose.model('Devote',DevoteSchema)
module.exports = Devote