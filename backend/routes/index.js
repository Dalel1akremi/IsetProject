import express from "express";
import { RegisterEtu,LoginEtu, getAllAffiches} from "../controllers/Etudiants.js";
import { verifyToken } from "../middelware/VerifyToken.js";
import { RegisterChef, LoginChef } from "../controllers/ChefDep.js";
import { RegisterAdmin, LoginAdmin } from "../controllers/Admin.js";
const router = express.Router();
router.post('/LoginEtu', LoginEtu);
router.post('/RegisterEtu', RegisterEtu);
router.get('/allaffiche',verifyToken,getAllAffiches);
router.post('/RegisterChef', RegisterChef);
router.post('/LoginChef',LoginChef);
router.post('/RegisterAdmin', RegisterAdmin);
router.post('/LoginAdmin',LoginAdmin);

export default router;