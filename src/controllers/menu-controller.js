const MenuRepository = require('../repository/menu-repository')
const ResponseModel = require('../models/response-model')

exports.CreateMenu = async(req, res, next) =>{
    try {
        var response = await MenuRepository.CreateMenu(req.body)

        res.status(201).send(ResponseModel.responseModel({
            exito: true,
            mensagem: "Menu Cadastrado com sucesso",
            objecto: null
        }))
    } catch (error) {
        
        res.status(400).send(ResponseModel.responseModel({
            exito: false,
            mensagem: "Erro no cadastro",
            objecto: error
        }))
    }
}

exports.getByRestaurant = async(req, res, next) =>{
    try {
        var response = await MenuRepository.getByRestaurant(req.params.id)

        res.status(200).send(ResponseModel.responseModel({
            exito: true,
            mensagem: "Menu listado com sucesso",
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