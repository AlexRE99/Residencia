//ENCARGADO DE DEFINIR LA ENTIDAD DE LA BDD

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
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
    @Column('varchar',{length: 25})
    nombreUsuario: string;
    /**
     * CREANDO UNA COLUMNA LLAMADA 'nombre' PARA TABLA 'Usuarios'
     */
    @Column('varchar')
    password: string;
    /**
     * CREANDO UNA COLUMNA LLAMADA 'nombre' PARA TABLA 'Usuarios'
     */
    @Column()
    isActive: boolean; 
}