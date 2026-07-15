import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
} from "class-validator";

export class CreatePotreroDto {
  @IsString({
    message: "El nombre debe ser un texto",
  })
  @IsNotEmpty({
    message: "El nombre es obligatorio",
  })
  nombre!: string;

  @IsOptional()
  @IsString({
    message: "La descripción debe ser un texto",
  })
  descripcion?: string;

  @IsOptional()
  @IsNumber(
    {},
    {
      message: "El área debe ser un número",
    }
  )
  @Min(0, {
    message: "El área no puede ser negativa",
  })
  area?: number;

  @IsUUID("4", {
    message: "El ID de la finca no es válido",
  })
  fincaId!: string;
}