import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PerfilComponente {

    @PrimaryGeneratedColumn('uuid')
    idPerfil: string
    /**
     * 
     */
    @Column()
    perfil: string
    
}
