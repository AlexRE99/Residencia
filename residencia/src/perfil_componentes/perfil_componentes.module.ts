import { Module } from '@nestjs/common';
import { PerfilComponentesService } from './perfil_componentes.service';
import { PerfilComponentesController } from './perfil_componentes.controller';

@Module({
  controllers: [PerfilComponentesController],
  providers: [PerfilComponentesService],
})
export class PerfilComponentesModule {}
