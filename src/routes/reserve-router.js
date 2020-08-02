const express = require('express')
const controller = require('../controllers/reserve-controller')
const middlewares = require('../midlewares/auth')

const router = express.Router()

router.post('/addReserve',  middlewares, controller.CreateReserve)
router.get('/getByUser',  middlewares, controller.getByUser)

module.exports = router;