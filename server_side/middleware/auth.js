const jwt = require('jsonwebtoken');

// In-memory set to store revoked tokens
// const revokedTokens = new Set();

const auth = (req,res,next)=>{
    let authHeader = req.headers.authorization;

    if(authHeader==undefined){
        res.status(401).send({error:"no token provided"})
    }
    let token = authHeader.split(" ")[1]
    jwt.verify(token,"secret",(err,decoded)=>{
        if(err){
            res.status(500).send({error:"Authentication failed"})
        }
            res.send(decoded)
            // req.send(decoded);
            next()
        
    })
}

// module.exports = auth;
module.exports = auth;
