import express from "express";
import {View_mess_users,fetch_total_tokens,Deduct_tokens} from "../controllers/Mess_owner_controller.js"
const router = express.Router();

router.post("/View_mess_users", View_mess_users);
router.post("/fetch_total_tokens", fetch_total_tokens);
router.post("/Deduct_tokens", Deduct_tokens);
export default router