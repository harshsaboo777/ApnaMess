import express from "express";
import {fetch_mess_users,fetch_mess_id,check_mess_unique} from "../controllers/Delivery_controller.js"
const router = express.Router();

router.post("/check_mess_unique", check_mess_unique);
router.post("/fetch_mess_id", fetch_mess_id);
router.post("/fetch_mess_users", fetch_mess_users);

export default router