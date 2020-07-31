const ResponseModel = require('../models/response-model')
const UserRepository = require('../repository/user-repository')
const md5 = require('md5')
const TokenService = require('../services/token-service')

exports.createUser = async(req, res, next) =>{


    try {

        

      var response = await  UserRepository.createUser(
          {
              nome: req.body.nome,
              senha: md5(req.body.senha + global.SECRET_KEY),
              telemovel: req.body.telemovel
          }
      )

        
        res.status(201).send(
            ResponseModel.responseModel(
            {
                exito: true,
                mensagem: "Cadastrado com sucesso",
                objecto: null
            }
            )
        )
    } catch (error) {
        res.status(500).send(
            ResponseModel.responseModel(
            {
                exito: false,
                mensagem: "Erro ao cadstrar",
                objecto: error
            }
            )
        )
    }

   
}

exports.login = async(req, res, next)=>{
    var response = await UserRepository.login(
        {
            telemovel: req.body.telemovel,
            senha: md5(req.body.senha + global.SECRET_KEY)
        }
    )
   

    if(response ==null){
        res.send(
            ResponseModel.responseModel(
                {
                exito : false,
                mensagem: "Dados incorrectos",
                objecto: null
                }
            )
        )
    } else{
        res.send(
            {
                token: TokenService.generateToken({
                    id: response._id,
                    telemovel: response.telemovel
                }),
                
                    exito: true,
                    mensagem: "Login efetuado com sucesso",
                    objecto: {
                        nome: response.nome,
                        id: response._id
                    }
            
            }
        )
    }
}