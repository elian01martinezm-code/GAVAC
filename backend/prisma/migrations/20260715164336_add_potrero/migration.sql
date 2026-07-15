-- CreateTable
CREATE TABLE "Potrero" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "area" DOUBLE PRECISION,
    "estado" TEXT NOT NULL DEFAULT 'Activo',
    "fechaRegistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fechaActualizacion" TIMESTAMP(3) NOT NULL,
    "fincaId" TEXT NOT NULL,

    CONSTRAINT "Potrero_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Potrero_fincaId_idx" ON "Potrero"("fincaId");

-- AddForeignKey
ALTER TABLE "Potrero" ADD CONSTRAINT "Potrero_fincaId_fkey" FOREIGN KEY ("fincaId") REFERENCES "Finca"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
