import { Router } from "express";
import { PotreroController } from "../controller/potrero.controller.js";
import { validateDto } from "../../../middlewares/validateDto.js";
import { CreatePotreroDto } from "../dto/create-potrero.dto.js";

const router = Router();

const potreroController = new PotreroController();

router.get("/", (req, res) => potreroController.findAll(req, res));

router.post(
  "/",
  validateDto(CreatePotreroDto),
  (req, res) => potreroController.create(req, res)
);

export default router;