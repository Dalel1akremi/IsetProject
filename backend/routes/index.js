import express from "express";
import { RegisterEtu,LoginEtu, getAllAffiches} from "../controllers/Etudiants.js";
import { verifyToken } from "../middelware/VerifyToken.js";
import { RegisterChef, LoginChef } from "../controllers/ChefDep.js";
const router = express.Router();
router.post('/LoginEtu', LoginEtu);
router.post('/RegisterEtu', RegisterEtu);
router.get('/allaffiche',verifyToken,getAllAffiches);
router.post('/RegisterChef', RegisterChef);
router.post('/LoginChef',LoginChef);

export default router;