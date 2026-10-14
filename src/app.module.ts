import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AlumnosModule } from './alumnos/alumnos.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [ AlumnosModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
