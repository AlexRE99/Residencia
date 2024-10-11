import { Componente } from "src/componentes/entities/componente.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PerfilComponente {

    @PrimaryGeneratedColumn('uuid')
    idPerfil: string
    /**
     * 
     */
    @Column()
    perfil: string
    
    @ManyToOne( () => Componente, componente => componente.componente_perfil)
    @JoinColumn()
    componente_perfil: Componente;
}
