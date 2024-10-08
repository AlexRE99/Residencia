import { Module } from '@nestjs/common';
import { PuertosService } from './puertos.service';
import { PuertosController } from './puertos.controller';

@Module({
  controllers: [PuertosController],
  providers: [PuertosService],
})
export class PuertosModule {}
