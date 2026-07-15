import { Router } from "express";
import { FincaController } from "../controller/finca.controller.js";
import { validateDto } from "../../../middlewares/validateDto.js";
import { CreateFincaDto } from "../dto/create-finca.dto.js";

const router = Router();

const fincaController = new FincaController();

router.get("/", (req, res) => fincaController.findAll(req, res));

router.post(
  "/",
  validateDto(CreateFincaDto),
  (req, res) => fincaController.create(req, res)
);

export default router;