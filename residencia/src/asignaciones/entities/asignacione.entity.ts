import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Asignacione {

    @PrimaryGeneratedColumn('uuid')
    idAsignacion: string

    @Column()
    fechaAsignacion: Date

    @Column()
    fuap: Date

}
