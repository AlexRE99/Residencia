import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsuariosService } from "./usuarios.service";
import { CreateUsuarioDto } from "./dto/crear_usuario.dto";
import { LoginUsuarioDto } from "./dto/login_usuario.dto";

@Controller('usuarios')
export class UsuariosController{
    constructor(private readonly usuariosService: UsuariosService){}
    
    @Post('login')
    async getUsers(@Body() login_usuario: LoginUsuarioDto ) {
     const respuesta = await this.usuariosService.login(login_usuario);
     console.log(respuesta);
     return respuesta ? "Login con éxito" : false;
    }

    @Post('registrar')
    Register(@Body() registro_nuevo: CreateUsuarioDto){
        return this.usuariosService.registrar(registro_nuevo); 
    }
}