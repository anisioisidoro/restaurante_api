const express = require('express')
const controller = require('../controllers/user-controller')

const router = express.Router()

router.post('/addUser', controller.createUser)

router.post('/login', controller.login)

router.get('/info', controller.getUser)


module.exports = router;