const mongoose = require('mongoose')
const UserModel = mongoose.model('User')


exports.createUser = async(data)=>{
   
 var userModel = UserModel(data)
var response = await userModel.save()
return response
  
}

exports.login = async(data)=>{
    //var userModel = UserModel(data)
    var response = await UserModel.findOne({
        telemovel: data.telemovel,
        senha: data.senha
    })

    return response
}