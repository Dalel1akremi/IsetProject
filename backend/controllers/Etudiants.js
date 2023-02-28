import Etudiants from "../models/EtudiantsModel.js";
import bcrypt from "bcrypt";


import jwt from "jsonwebtoken";






export const LoginEtu = async(req, res) => {
   
    try {
        const etudiant = await Etudiants.findAll({
            where:{
                email: req.body.email
            }
     
        });
       
        const match = await bcrypt.compare(req.body.password, etudiant[0].password);
        console.log(match)
        if(match) return res.status(200).json({msg: "etudiant existe"});
        const userId = etudiant[0].id;
        const name = etudiant[0].name;
        const email = etudiant[0].email;
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await Etudiants.update({refresh_token: refreshToken},{
            where:{
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({msg:"please register "});
    }
}