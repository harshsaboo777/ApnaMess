import express from "express";
import {delete_agent,get_agent,fetch_status,View_mess_users,fetch_total_tokens,Deduct_tokens,Mess_registration,fetch_mess_id,toggle_status,generate_code} from "../controllers/Mess_owner_controller.js"
const router = express.Router();

router.post("/View_mess_users", View_mess_users);
router.post("/fetch_total_tokens", fetch_total_tokens);
router.post("/Deduct_tokens", Deduct_tokens);
router.post("/Mess_registration",Mess_registration);
router.post("/fetch_mess_id",fetch_mess_id);
router.post("/toggle_status",toggle_status);
router.post("/fetch_status",fetch_status);
router.post("/generate_code",generate_code);
router.post("/get_agent",get_agent);
router.post("/delete_agent",delete_agent);
export default router;