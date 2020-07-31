const mongoolse = require('mongoose')

global.SECRET_KEY = "65ce8424eb16a3c69c377cf49ab5ea0b"
module.exports = {
    // conectionString: 'mongodb://localhost:27017/restaurante'
    conectionString: 'mongodb://chenilson:chenilson@cluster0-shard-00-00.txujt.gcp.mongodb.net:27017,cluster0-shard-00-01.txujt.gcp.mongodb.net:27017,cluster0-shard-00-02.txujt.gcp.mongodb.net:27017/restaurante?ssl=true&replicaSet=atlas-3arc0n-shard-0&authSource=admin&retryWrites=true&w=majority'
}

