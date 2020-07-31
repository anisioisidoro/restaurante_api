
const mongoose = require('mongoose')

const RestaurantModel = mongoose.model('Restaurant')

exports.CreateRestaurant = async(data) =>{

    var restaurantModel =  RestaurantModel(data)
    var response = await restaurantModel.save()
    return response;
}

exports.getByMunicipio = async(data) =>{
    var response = await RestaurantModel.find({municipio: data})
    return response;
}