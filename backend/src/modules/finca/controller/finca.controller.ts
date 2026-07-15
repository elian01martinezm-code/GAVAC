import type { Request, Response } from "express";
import { FincaService } from "../service/finca.service.js";

export class FincaController {
  private fincaService: FincaService;

  constructor() {
    this.fincaService = new FincaService();
  }

  async findAll(req: Request, res: Response) {
    try {
      const fincas = await this.fincaService.findAll();

      return res.status(200).json(fincas);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error al obtener las fincas",
      });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const finca = await this.fincaService.create(req.body);

      return res.status(201).json({
        success: true,
        message: "Finca creada correctamente",
        data: finca,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error al crear la finca",
      });
    }
  }
}