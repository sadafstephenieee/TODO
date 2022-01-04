const {sign, verify} = require("jsonwebtoken");

const createTokens= (user)=>{
    const accessToken = sign(
        {username : user.username , id : user.id},
        "webtoken"
    );
    return accessToken;
} ; 
const validToken = (req , res ,next)=> {
    const accessToken = res.cookie["access-token"];

    if(!accessToken){
        return res.json({error: "user not authenticated"});
    };
    try{
        const validToken = verify(accessToken , "webtoken");
        if(validToken){
            req.authenticated = true;
            return next();
        }
    } catch(err){
        return res.status(400).json({error : err});
    };
}

module.exports = {createTokens , validToken};