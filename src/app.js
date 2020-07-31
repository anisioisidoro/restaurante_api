const bodyParser = require('body-parser')
const express = require('express')
const config = require('../config/config')
const mongoose = require('mongoose')


const app = express();

const router = express.Router();
mongoose.connect(config.conectionString)

//Carregar Models

const UseModel = require('./models/user-model')
const MenuModel = require('./models/menu-model')
const RestaurantModel = require('./models/restaurant-model')
const ReserveModel = require('./models/reserve-model')

//Routas

const indexRouter = require('./routes/index-router')
const UserRouter = require('./routes/user-router')
const MenuRouter = require('./routes/menu-router')
const RestaurantRouter = require('./routes/restaurant-router')
const ReserveRouter = require('./routes/reserve-router')


//Habilitar Body-Parser

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))




//Habilitar Routas

app.use('/', indexRouter)
app.use('/user', UserRouter)
app.use('/menu', MenuRouter)
app.use('/reserve', ReserveRouter)
app.use('/restaurant', RestaurantRouter)


module.exports = app;