import { Module } from '@nestjs/common';
import { DetallesGeneralesService } from './detalles_generales.service';
import { DetallesGeneralesController } from './detalles_generales.controller';

@Module({
  controllers: [DetallesGeneralesController],
  providers: [DetallesGeneralesService],
})
export class DetallesGeneralesModule {}
