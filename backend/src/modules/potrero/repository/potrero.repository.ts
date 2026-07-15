import prisma from "../../../shared/database/prisma.js";

export class PotreroRepository {
  async findAll() {
    return prisma.potrero.findMany({
      include: {
        finca: true,
      },
    });
  }
}