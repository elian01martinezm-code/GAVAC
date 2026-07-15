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
}