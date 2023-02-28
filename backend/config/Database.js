import {Sequelize} from "sequelize";

const db = new Sequelize('etudiants','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;