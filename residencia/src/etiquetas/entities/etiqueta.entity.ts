import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Etiqueta {
    /**
     * 
     */
    @PrimaryGeneratedColumn('uuid')
    idEtiquetas: string

    @Column()
    etiqueta: string
}
