import { Module } from '@nestjs/common';
import { InformaciónRedesService } from './información_redes.service';
import { InformaciónRedesController } from './información_redes.controller';

@Module({
  controllers: [InformaciónRedesController],
  providers: [InformaciónRedesService],
})
export class InformaciónRedesModule {}
