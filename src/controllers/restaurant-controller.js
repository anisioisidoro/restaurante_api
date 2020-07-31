const RestaurantRepository = require('../repository/restaurant-repository')
const ResponseModel = require('../models/response-model')

exports.CreateRestaurant = async(req, res, next)=>{
    try {
      var response = await RestaurantRepository.CreateRestaurant(req.body)
  
      res.status(201).send(ResponseModel.responseModel({
          exito: true,
          mensagem: "Restaurante cadastrado com sucesso",
          objecto: null
      }))
    } catch (error) {
      res.status(400).send(ResponseModel.responseModel({
          exito: true,
          mensagem: "Erro no cadastro",
          objecto: null
      }))
    }
  
  }

  exports.getByMunicipio = async(req, res, next)=>{
    try {
      var response = await RestaurantRepository.getByMunicipio(req.params.municipio)
  
      res.status(201).send(ResponseModel.responseModel({
          exito: true,
          mensagem: "Restaurante listado com sucesso",
          objecto: response
      }))
    } catch (error) {
      res.status(400).send(ResponseModel.responseModel({
          exito: true,
          mensagem: "Erro na listagem",
          objecto: null
      }))
    }
  
  }