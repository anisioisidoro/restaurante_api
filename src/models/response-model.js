
module.exports = class ResponseModel{

   static responseModel = ({exito, mensagem, objecto})=>{

        return {
        exito: exito ,
        mensagem : mensagem,
        objecto: objecto
      }
    }
}