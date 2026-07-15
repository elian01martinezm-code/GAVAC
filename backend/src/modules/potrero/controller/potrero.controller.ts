import type { Request, Response } from "express";
import { PotreroService } from "../service/potrero.service.js";

export class PotreroController {
  private potreroService: PotreroService;

  constructor() {
    this.potreroService = new PotreroService();
  }

  async findAll(req: Request, res: Response) {
    try {
      const potreros = await this.potreroService.findAll();

      return res.status(200).json(potreros);
    } catch (error) {
      return res.status(500).json({
        message: "Error al obtener los potreros",
      });
    }
  }

  async create(req: Request, res: Response) {
  try {
    const potrero = await this.potreroService.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Potrero creado correctamente",
      data: potrero,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error al crear el potrero",
    });
  }
}
}