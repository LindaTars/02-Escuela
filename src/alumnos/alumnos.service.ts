import { Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto.js';
import { UpdateAlumnoDto } from './dto/update-alumno.dto.js';

@Injectable()
export class AlumnosService {
  private listaAlumnos: any[] = [];

  create(createAlumnoDto: any) {
    this.listaAlumnos.push(createAlumnoDto);
    return {
      mensaje: 'Alumno guardado'
    };
  }

  findAll() {
    return this.listaAlumnos;
  }

  findOne(matricula: string) {
    const alumno = this.listaAlumnos.find((a) => a.matricula === matricula);

    if (!alumno) {
      return { mensaje: `No se encontró un alumno con la matrícula ${matricula}` };
    }
    return { mensaje: `Hola ${alumno.nombre}` };
  }

  update(id: number, updateAlumnoDto: UpdateAlumnoDto) {
    return `This action updates a #${id} alumno`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumno`;
  }
}
