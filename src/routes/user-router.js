const express = require('express')
const controller = require('../controllers/user-controller')

const router = express.Router()

router.post('/addUser', controller.createUser)

router.get('/login', controller.login)


module.exports = router;