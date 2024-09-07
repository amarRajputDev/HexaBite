import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) => {

    // console.log(req.cookies)
    const token = req.cookies.jwt // Adjust as needed
    
    jwt.verify( token , process.env.JWT_SECRET ,(e , payload)=>{
        req.user = payload
        // console.log("token checked")
        next()
    } )

};