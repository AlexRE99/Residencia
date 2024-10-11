import { Componente } from "src/componentes/entities/componente.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class InformaciónRede {

    @PrimaryGeneratedColumn('uuid')
    idInformacion: string;

    @Column()
    ip: string;

    @Column()
    hostname: string;

    @OneToOne( () => Componente, componente_informacion => componente_informacion.informacion_componente )
    @JoinColumn()
    componente_info: Componente;
}
