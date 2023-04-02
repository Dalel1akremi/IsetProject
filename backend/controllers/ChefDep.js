import ChefDev from "../models/ChefDeparetModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";




export const RegisterChef = async(req, res) => {
    const { firstname, lastname,email,code_dautorisation,cin,nom_dep,password, confPassword } = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password and Confirm Password is not compatible"});
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
        await ChefDev.create({       
            firstname:firstname,
            lastname:lastname,
            email: email,
            code_dautorisation: code_dautorisation,
            cin: cin, 
            nom_dep:nom_dep,
            password: hashPassword
        });
        res.json({msg: "Register secessuful"});
    } catch (error) {
        console.log(error);
        return res.status(404).json({msg: "you have an acount it has the same email already or Wrong in your information"});

    } 
}

export const LoginChef = async(req, res) => {
   
    try {
        const chef = await ChefDev.findAll({
            where:{
                email: req.body.email
            }
     
        });
       
        const match = await bcrypt.compare(req.body.password, chef[0].password);
        console.log(match)
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const userId = chef[0].id;
        const firstname = chef[0].firstname;
        const lastname = chef[0].lastname;
        const email = chef[0].email;
        const accessToken = jwt.sign({userId, firstname,lastname, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({userId, firstname,lastname, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await ChefDev.update({refresh_token: refreshToken},{
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




