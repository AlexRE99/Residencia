import { Componente } from "src/componentes/entities/componente.entity";
import { Propiedad } from "src/propiedad/entities/propiedad.entity";
import { Usuarios } from "src/usuarios/entidades/usuario.entity";
import { Column, Entity, Index, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Area {

    @PrimaryGeneratedColumn('uuid')
    idArea: string

    @Column()
    @Index({ unique: true })
    nombreArea: string; 

    @OneToMany( () => Componente, componente => componente.area )
    componentes: Componente[];

    @JoinTable()
    @ManyToMany( () => Propiedad, propiedad => propiedad.area )
    propiedad: Propiedad[];

    @OneToMany( () => Usuarios, usuario => usuario.area)
    usuario: Usuarios[];
}

