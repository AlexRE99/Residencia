//ENCARGADO DE DEFINIR LA ENTIDAD DE LA BDD

import { Area } from "src/area/entities/area.entity";
import { Asignacione } from "src/asignaciones/entities/asignacione.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
/**
 * REPRESENTA LA TABLA 'Usuarios'
 */
@Entity()
export class Usuarios {
    /**
     * LLAVE PRIMARIA DE LA TABLA 'Usuarios'
     */
    @PrimaryGeneratedColumn('uuid')
    idUsuario: string;
    /**
     * CREANDO UNA COLUMNA LLAMADA 'nombre' PARA TABLA 'Usuarios'
     */
    @Column()
    apPaterno: string;
    /**
     * CREANDO UNA COLUMNA LLAMADA 'nombre' PARA TABLA 'Usuarios'
     */
    @Column()
    apMaterno: string;
    /**
     * CREANDO UNA COLUMNA LLAMADA 'nombre' PARA TABLA 'Usuarios'
     */
    @Column()
    nombre: string; 

    @Column()
    numEmpleado: number; 

    @Column()
    extRed: string; 

    @Column()
    email: string; 

    @ManyToOne(() => Area, area => area.usuario)
    @JoinColumn()
    area: Area;

    @OneToMany( () => Asignacione, usuario_asig => usuario_asig.usuario_asigna)
    asignacion_usuario: Asignacione[];
}