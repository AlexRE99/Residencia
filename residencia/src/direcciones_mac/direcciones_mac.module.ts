import { Module } from '@nestjs/common';
import { DireccionesMacService } from './direcciones_mac.service';
import { DireccionesMacController } from './direcciones_mac.controller';

@Module({
  controllers: [DireccionesMacController],
  providers: [DireccionesMacService],
})
export class DireccionesMacModule {}
