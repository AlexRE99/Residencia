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

}