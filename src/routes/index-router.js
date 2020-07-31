const express = require('express')

const router = express.Router()

router.get('/', (req, res, next) =>{

    res.send(
        {
            titulo: "Api Restaurante",
            versao: "1.0.0"
        }
    )
})

module.exports = router;