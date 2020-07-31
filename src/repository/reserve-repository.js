
const mongoose = require('mongoose')

const ReserveModel = mongoose.model('Reserve')

exports.CreateReserve = async(data) =>{

   
    var reserveModel =  ReserveModel({
     usuario: data.usuario,
     restaurante: data.restaurante,
     estado: data.estado,
     dataReserva: data.dataReserva,
     horaReserva: data.horaReserva
    })
    var response = await reserveModel.save()
   
    return response;
}

exports.getByUser = async(data) =>{
    var response = await ReserveModel.find({usuario: data})
    return response;
}