const ReserveReposiotory = require('../repository/reserve-repository')
const ResponseModel = require('../models/response-model')
const TokenService = require('../services/token-service')

exports.CreateReserve = async(req, res, next)=>{
  try {
    var token = await  TokenDecode.decodeToeknData(req)
     var response = await ReserveReposiotory.CreateReserve({
        usuario: token.id,
        restaurante: req.body.restaurante,
        estado: req.body.estado,
        dataReserva: req.body.dataReserva,
        horaReserva: req.body.horaReserva
       })
    
    res.status(201).send(ResponseModel.responseModel({
        exito: true,
        mensagem: "Reserva feita com sucesso",
        objecto: response
    }))
  } catch (error) {
    res.status(400).send(ResponseModel.responseModel({
        exito: false,
        mensagem: "Erro na reserva",
        objecto: error
    }))
  }

}

exports.getByUser = async(req, res, next)=>{
    try {
        var response = await ReserveReposiotory.getByUser(req.params.usuario)
        res.status(200).send(ResponseModel.responseModel({
            exito: true,
            mensagem: "Reserva listada com sucesso",
            objecto: response
        }))
    } catch (error) {
        
        res.status(400).send(ResponseModel.responseModel({
            exito: false,
            mensagem: "Erro na listagem",
            objecto: error
        }))
    }
}