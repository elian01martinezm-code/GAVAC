import prisma from "../../../shared/database/prisma.js";

export class FincaRepository {
  async findAll() {
    return prisma.finca.findMany();
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
    return prisma.finca.create({
      data,
    });
  }
}