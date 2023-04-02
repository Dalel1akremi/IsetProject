import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const ChefDev = db.define('chef_departement',{
    firstname :{
        type: DataTypes.STRING
    },
    lastname :{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    code_dautorisation:{
        type: DataTypes.STRING
    },
    cin:{
        type: DataTypes.STRING
    },
    nom_dep:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});

export default ChefDev;