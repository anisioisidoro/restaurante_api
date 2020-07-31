const jwt = require("jsonwebtoken");

module.exports = {

    generateToken(params = {}) {
        return jwt.sign(params, global.SECRET_KEY, {
           // expiresIn: '1095d'
        });
    },

    decodeToken (data) {
        var token =  jwt.verify(data, global.SECRET_KEY);
       
        return token;
    }
}