import { Role } from "src/roles/entities/role.entity";
import { Usuarios } from "src/usuarios/entidades/usuario.entity";
import { Entity, Index, ManyToOne } from "typeorm";


@Entity()
export class UsuarioRol {
    @ManyToOne(() => Role , role => role.nombre)
    rol: Role; 

    @ManyToOne( () => Usuarios, usuario => usuario.idUsuario)
    @Index({unique: true})
    usuario: Usuarios;
}



