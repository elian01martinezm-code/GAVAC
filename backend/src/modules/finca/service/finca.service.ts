import { FincaRepository } from "../repository/finca.repository.js";

export class FincaService {
  private fincaRepository: FincaRepository;

  constructor() {
    this.fincaRepository = new FincaRepository();
  }

  async findAll() {
    return await this.fincaRepository.findAll();
  }

  async create(data: {
    codigo: string;
    nombre: string;
    propietario: string;
    departamento: string;
    municipio: string;
    vereda?: string;
    direccion?: string;
    telefono: string;
    tamanoHectareas: number;
    descripcion?: string;
  }) {
    return await this.fincaRepository.create(data);
  }
}