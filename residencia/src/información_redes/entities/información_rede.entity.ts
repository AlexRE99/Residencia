import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class InformaciónRede {

    @PrimaryGeneratedColumn('uuid')
    idInformacion: string

    @Column()
    ip: string

    @Column()
    hostname: string
}
