import { Componente } from "src/componentes/entities/componente.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Etiqueta {
    /**
     * 
     */
    @PrimaryGeneratedColumn('uuid')
    idEtiquetas: string

    @Column()
    etiqueta: string

    @OneToMany( () => Componente, componente_etiqueta => componente_etiqueta.etiqueta_componente)
    @JoinColumn()
    componente_etiqueta: Componente[];
}
