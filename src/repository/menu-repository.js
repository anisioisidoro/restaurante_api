const mongoose = require('mongoose')

const MenuModel = mongoose.model('Menu')

exports.CreateMenu = async(data) =>{

    var menuModel =  MenuModel(data)
    var response = await menuModel.save()
    return response;
}

exports.getByRestaurant = async(data) =>{
    var response = await MenuModel.find({restaurante: data})

    return response;
}