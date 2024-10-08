import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuarios } from './entidades/usuario.entity';
import { UsuariosService } from './usuarios.service';


@Module({
    imports: [TypeOrmModule.forFeature([Usuarios]),],
    controllers: [UsuariosController],
    providers: [UsuariosService],
})
export class UsuariosModule { }