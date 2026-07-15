import { Router } from "express";
import { PotreroController } from "../controller/potrero.controller.js";

const router = Router();
const potreroController = new PotreroController();

router.get("/", (req, res) => potreroController.findAll(req, res));

export default router;