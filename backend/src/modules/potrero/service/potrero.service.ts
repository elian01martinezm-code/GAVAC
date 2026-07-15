import { PotreroRepository } from "../repository/potrero.repository.js";

export class PotreroService {
  private potreroRepository: PotreroRepository;

  constructor() {
    this.potreroRepository = new PotreroRepository();
  }

  async findAll() {
    return await this.potreroRepository.findAll();
  }
}