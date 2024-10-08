import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule , } from '@nestjs/config';
import { Usuarios } from './usuarios/entidades/usuario.entity';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ComponentesModule } from './componentes/componentes.module';
import { DetallesGeneralesModule } from './detalles_generales/detalles_generales.module';
import { DireccionesMacModule } from './direcciones_mac/direcciones_mac.module';
import { PerfilComponentesModule } from './perfil_componentes/perfil_componentes.module';
import { EtiquetasModule } from './etiquetas/etiquetas.module';
import { PuertosModule } from './puertos/puertos.module';
import { InformaciónRedesModule } from './información_redes/información_redes.module';
import { AsignacionesModule } from './asignaciones/asignaciones.module';
import { PropiedadModule } from './propiedad/propiedad.module';
import { AreaModule } from './area/area.module';
import { RolesModule } from './roles/roles.module';
import { UsuarioRolModule } from './usuario_rol/usuario_rol.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true , 
    }),
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      password: '12345678',
      database: 'prueba',
      entities: [Usuarios],
      synchronize: true,
      options: {
        trustServerCertificate: true
      },
    }),
    UsuariosModule,
    ComponentesModule,
    DetallesGeneralesModule,
    DireccionesMacModule,
    PerfilComponentesModule,
    EtiquetasModule,
    PuertosModule,
    InformaciónRedesModule,
    AsignacionesModule,
    PropiedadModule,
    AreaModule,
    RolesModule,
    UsuarioRolModule
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule {}
