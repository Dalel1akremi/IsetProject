import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Etudiants= db.define('etudiants',{
    firstname:{
        type: DataTypes.STRING
    },
    lastname:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    num_insc:{
        type: DataTypes.NUMBER
    },
    cin:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
});

export default Etudiants;