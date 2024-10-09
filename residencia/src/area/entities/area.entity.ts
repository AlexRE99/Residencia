import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Area {

    @PrimaryGeneratedColumn('uuid')
    idArea: string

    @Column()
    nombreArea: string

    
}

