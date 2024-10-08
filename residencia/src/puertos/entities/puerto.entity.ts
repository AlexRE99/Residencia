import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Puerto {
    @PrimaryGeneratedColumn('uuid')
    idPuertos: string

    @Column()
    numeroPuertos: number
}
