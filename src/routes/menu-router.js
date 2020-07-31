const express = require('express')
const controller = require('../controllers/menu-controller')
const middlewares = require('../midlewares/auth')

const router = express.Router()

router.post('/addMenu',  middlewares, controller.CreateMenu)
router.get('/getByRestaurant/:id',  middlewares, controller.getByRestaurant)

module.exports = router;