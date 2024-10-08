import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Usuarios } from './entidades/usuario.entity';
import { CreateUsuarioDto, UpdateUsuario } from './dto/crear_usuario.dto';
import { hash, compare } from 'bcrypt';
import { LoginUsuarioDto } from './dto/login_usuario.dto';
@Injectable()
export class UsuariosService {
  constructor( 
    @InjectRepository( Usuarios )
    private usuariosRepository: Repository< Usuarios >,
   ){}

  async registrar(usuario: CreateUsuarioDto ) {
    //usuario true usuario1 contrase1234
    const { password } = usuario;
    const hasheo_contraseña = await hash(password, 10);
    usuario = { ...usuario , password: hasheo_contraseña }; //true usuario1 $!@#(AS)!@(#_AS)D-123i
    const registro = this.usuariosRepository.create( usuario );
    return this.usuariosRepository.save(registro);  
   }

  async login (usuario_login: LoginUsuarioDto) {
    const { nombreUsuario , password } = usuario_login;
    const usuario_info = await this.usuariosRepository.findOne({where: {nombreUsuario} } ) // En esta parte preguntamos a la bd por la contrase;a hasheada
    const pass_compare = await compare(password, usuario_info.password)
    return pass_compare;

  }
  // actualizar( idUsuario: number, nombre: string  ): Promise<UpdateResult> {
  //   const actualizarUsuario: UpdateUsuario = { nombre }
  //   const registro = this.usuariosRepository.update( idUsuario , actualizarUsuario );
  //    return registro
  //  }

  findAll(): Promise < Usuarios[] > {
    return this.usuariosRepository.find();
  }

  findAllMaster(): Promise < Usuarios[] > {
    return this.usuariosRepository.find( );
  }

  findOne(id: string): Promise< Usuarios | null > {
    return this.usuariosRepository.findOneBy( { idUsuario: id } );
  }

  remove(id: number) {
    return this.usuariosRepository.delete(id);
  }
}