-- CreateTable
CREATE TABLE "Animal" (
    "id" TEXT NOT NULL,
    "chapeta" TEXT NOT NULL,
    "nombre" TEXT,
    "sexo" TEXT NOT NULL,
    "fechaNacimiento" TIMESTAMP(3) NOT NULL,
    "fechaIngreso" TIMESTAMP(3) NOT NULL,
    "procedencia" TEXT NOT NULL,
    "pesoActual" DOUBLE PRECISION NOT NULL,
    "estado" TEXT NOT NULL DEFAULT 'Activo',
    "observaciones" TEXT,
    "razaId" TEXT NOT NULL,
    "fechaRegistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaActualizacion" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Animal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Animal_chapeta_key" ON "Animal"("chapeta");

-- AddForeignKey
ALTER TABLE "Animal" ADD CONSTRAINT "Animal_razaId_fkey" FOREIGN KEY ("razaId") REFERENCES "Raza"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
