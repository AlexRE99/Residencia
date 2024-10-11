import { Componente } from "src/componentes/entities/componente.entity";
import { Usuarios } from "src/usuarios/entidades/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Asignacione {

    @PrimaryGeneratedColumn('uuid')
    idAsignacion: string

    @Column()
    fechaAsignacion: Date;

    @Column()
    fuap: Date;

    @OneToOne(() => Componente, asignacion_compo => asignacion_compo.compo_asignacion)
    @JoinColumn()
    asig_componente: Componente;

    @ManyToOne( () => Usuarios, asignaciones_usu => asignaciones_usu.asignacion_usuario)
    usuario_asigna: Usuarios;
}