import { PotreroRepository } from "../repository/potrero.repository.js";

export class PotreroService {
  private potreroRepository: PotreroRepository;

  constructor() {
    this.potreroRepository = new PotreroRepository();
  }

  async findAll() {
    return await this.potreroRepository.findAll();
  }

   async create(data: {
    nombre: string;
    descripcion?: string;
    area?: number;
    fincaId: string;
  }) {
    return await this.potreroRepository.create(data);
  }
}