import { Router } from "express";
import { addMenuItem, getMenuItems } from "../controllers/menuControllers";

const router = Router();

router.post("/", addMenuItem);
router.get("/", getMenuItems);

export default router;
