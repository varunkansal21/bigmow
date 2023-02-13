const jwt = require('jsonwebtoken');
const jwt_secret="bigmow_user";

const fetchUser=(req,res,next)=>{

    //get the user from jwt token and append it to req body
    const token=req.header("auth-token");
    if(!token){
        req.status(401).send({error:"please authenticate using a valid token"});
    }

    try{
        const data=jwt.verify(token,jwt_secret);
        req.user=data.user;
    }
    catch(error){
        req.status(401).send({error:"please authenticate using a valid token"});
    }
    next()
}

module.exports=fetchUser;