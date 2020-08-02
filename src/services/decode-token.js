const dec = require("../services/token-service");
exports.decodeToeknData = async (req)=>{
    //Recuperar Token

   
    const header = req.headers.authorization;

    const parts = header.split(' ')
    const [ scheme, token ] = parts;

      //Decodificar Token
    const data =  dec.decodeToken(token)
    
    return data;
}