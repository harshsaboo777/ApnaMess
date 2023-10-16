import express from "express";
import {View_mess_users,fetch_total_tokens,Deduct_tokens,Mess_registration,fetch_mess_id} from "../controllers/Mess_owner_controller.js"
const router = express.Router();

router.post("/View_mess_users", View_mess_users);
router.post("/fetch_total_tokens", fetch_total_tokens);
router.post("/Deduct_tokens", Deduct_tokens);
router.post("/Mess_registration",Mess_registration);
router.post("/fetch_mess_id",fetch_mess_id);

export default router;