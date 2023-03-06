import Etudiants from "../models/EtudiantsModel.js";
import bcrypt from "bcrypt";


import jwt from "jsonwebtoken";



export const RegisterEtu = async(req, res) => {
    const { name, email,num_insc,cin, password, confPassword } = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password and Confirm Password is not compatible"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await Etudiants.create({       
            name: name,
            email: email,
            num_insc: num_insc,
            cin: cin, 
            password: hashPassword,
        });
        res.json({msg: "Register secessuful"});
    } catch (error) {
        console.log(error);
        return res.status(404).json({msg: "you have an count already or numero insecrit not found for fix the problem go to Iset for Register"});

    } 
}



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