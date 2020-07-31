const dec = require("../services/token-service");
exports.decodeToeknData = async (req)=>{
    //Recuperar Token

   
    const token = req.headers.authorization;

      //Decodificar Token
    const data = await dec.decodeToken(token)
     
    return data;
}