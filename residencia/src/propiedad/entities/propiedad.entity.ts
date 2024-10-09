import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Propiedad {

    @PrimaryGeneratedColumn('uuid')
    idPropiedad: string

    @Column()
    nombre: string

    @Column()
    idSitio: string

    @Column()
    sitio: string

    @Column()
    clue: string

    @Column()
    clavePrep: string

    @Column()
    tipoUnidad: string

    @Column()
    calle: string

    @Column()
    numero: string

    @Column()
    colonia: string

    @Column()
    municipio: string

    @Column()
    estado: string

    @Column()
    cp: number
}

