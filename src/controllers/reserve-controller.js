const ReserveReposiotory = require('../repository/reserve-repository')
const ResponseModel = require('../models/response-model')

exports.CreateReserve = async(req, res, next)=>{
  try {
     var response = await ReserveReposiotory.CreateReserve(req.body)
    
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