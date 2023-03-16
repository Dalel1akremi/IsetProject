import jwt from 'jsonwebtoken';





    
export const verifyToken=(req,res,next)=>{
  
  const token=req.headers.authorization
   
    if (!token)
    {
        res.status(400).json({msg:'error'})
    }
    try {
        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        next()
    }
    catch(e){
        res.status(400).json({msg:e})
    }
}