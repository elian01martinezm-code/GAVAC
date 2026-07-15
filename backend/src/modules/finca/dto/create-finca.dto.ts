import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from "class-validator";

export class CreateFincaDto {
  @IsString({
    message: "El código debe ser un texto",
  })
  @IsNotEmpty({
    message: "El código es obligatorio",
  })
  codigo!: string;

  @IsString({
    message: "El nombre debe ser un texto",
  })
  @IsNotEmpty({
    message: "El nombre es obligatorio",
  })
  nombre!: string;

  @IsString({
    message: "El propietario debe ser un texto",
  })
  @IsNotEmpty({
    message: "El propietario es obligatorio",
  })
  propietario!: string;

  @IsString()
  @IsNotEmpty()
  departamento!: string;

  @IsString()
  @IsNotEmpty()
  municipio!: string;

  @IsOptional()
  @IsString()
  vereda?: string;

  @IsOptional()
  @IsString()
  direccion?: string;

  @IsString()
  @IsNotEmpty()
  telefono!: string;

  @IsNumber({}, {
    message: "El tamaño debe ser un número",
  })
  @Min(0.1, {
    message: "El tamaño debe ser mayor que cero",
  })
  tamanoHectareas!: number;

  @IsOptional()
  @IsString()
  descripcion?: string;
}