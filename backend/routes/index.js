import express from "express";
import { LoginEtu} from "../controllers/Etudiants.js";

const router = express.Router();
router.post('/LoginEtu', LoginEtu);
export default router;