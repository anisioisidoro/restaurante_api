const jwt = require("jsonwebtoken");



module.exports = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).json({
            successo: false,
            sms: "Token não foi encontrado",
            objecto: null
        });

    const parts = authHeader.split(' ');

    if(!parts.length === 2) 
        return res.status(401).json({
            successo: false,
            sms: "Erro no token",
            objecto: null
        });

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).json({
            successo: false,
            sms: "Token mal formatado",
            objecto: null
        });

    jwt.verify(token, global.SECRET_KEY, (err, decoded) => {

        if(err) return res.status(401).json({
            successo: false,
            sms: "Token inválido",
            objecto: null
        });
        
         
        // authConfig.id = decoded.id;
        // authConfig.agencia = decoded.agencia
        // authConfig.seguradora = decoded.seguradora
        // console.log(decoded.seguradora);
        return next();
    });
}
