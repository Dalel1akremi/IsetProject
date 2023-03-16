import express from "express";
import { RegisterEtu,LoginEtu, getAllAffiches} from "../controllers/Etudiants.js";
import { verifyToken } from "../middelware/VerifyToken.js";

const router = express.Router();
router.post('/LoginEtu', LoginEtu);
router.post('/RegisterEtu', RegisterEtu);
router.get('/allaffiche',verifyToken,getAllAffiches);


export default router;