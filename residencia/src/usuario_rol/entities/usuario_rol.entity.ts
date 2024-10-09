import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class UsuarioRol {

    @PrimaryGeneratedColumn()
    idRoles: number

    @Column()
    nombre: string

    
}



