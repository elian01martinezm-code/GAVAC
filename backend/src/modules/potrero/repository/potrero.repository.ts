import prisma from "../../../shared/database/prisma.js";

export class PotreroRepository {
  async findAll() {
    return prisma.potrero.findMany({
      include: {
        finca: true,
      },
    });
  }

  async create(data: {
    nombre: string;
    descripcion?: string;
    area?: number;
    fincaId: string;
  }) {
    return prisma.potrero.create({
      data,
    });
  }
}