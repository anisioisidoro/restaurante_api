const express = require('express')
const controller = require('../controllers/restaurant-controller')
const middlewares = require('../midlewares/auth')

const router = express.Router()

router.post('/addRestaurant',  middlewares, controller.CreateRestaurant)
router.get('/getByMunicipio/:municipio',  middlewares, controller.getByMunicipio)

module.exports = router;