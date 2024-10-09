import { Module } from '@nestjs/common';
import { UsuarioRolService } from './usuario_rol.service';
import { UsuarioRolController } from './usuario_rol.controller';

@Module({
  controllers: [UsuarioRolController],
  providers: [UsuarioRolService],
})
export class UsuarioRolModule {}
