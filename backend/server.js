import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
import router from "./routes/index.js";
dotenv.config();
const app=express();

app.use(express.json());
app.use(router);

app.use(express.urlencoded({ extended: true }));

try {
    await db.authenticate();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}








app.listen(3000,()=>{console.log("something is running on port 3000!")})


