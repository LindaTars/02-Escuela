import { IsString, IsOptional } from 'class-validator';

export class CreateAlumnoDto {
    @IsString()
    @IsOptional()
    id?: string;

    @IsString()
    nombre: string;

    @IsString()
    matricula: string;
}