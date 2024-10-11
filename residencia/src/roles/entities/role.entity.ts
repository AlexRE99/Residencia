import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    idRol: number

    @Column()
    @Index({unique: true})
    nombre: string
}