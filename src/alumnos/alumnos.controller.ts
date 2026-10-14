import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlumnosService } from './alumnos.service.js';
import { CreateAlumnoDto } from './dto/create-alumno.dto.js';
import { UpdateAlumnoDto } from './dto/update-alumno.dto.js';

@Controller('escuela/3701')
export class AlumnosController {
  constructor(private readonly alumnosService: AlumnosService) {}

  @Post('alumnos')
  create(@Body() createAlumnoDto: CreateAlumnoDto) {
    return this.alumnosService.create(createAlumnoDto);
  }

  //? Obetener todos los alumnos desde /alumnos
  @Get('alumnos')
  findAll() {
    return this.alumnosService.findAll();
  }

  //? obtener un alumno por medio del ID desde /alumnos
  @Get('alumnos/:matricula')
  findOne(@Param('matricula') matricula: string) {
    return this.alumnosService.findOne(matricula);
  }

  //? obtener todos los alumnos desde /personas
  @Get('personas')
  findAllPersonas(){
    return this.alumnosService.findAll();
  }

  @Patch(':matricula/nombre/:id')
    update(
      @Param('matricula') matricula: string,
      @Param('id') id: string,
      @Body() updateAlumnoDto: UpdateAlumnoDto,
    ) {
      return this.alumnosService.update(+id, updateAlumnoDto);
    }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumnosService.remove(+id);
  }
}
