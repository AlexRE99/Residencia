import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

/**
 * Los detalles generales de un componente
 */
@Entity()
export class DetallesGenerales {
    /**
     * La llave primaria de los detalles generales
     */
    @PrimaryGeneratedColumn('uuid')
    idDetallesGenerales: string;
    /**
     * La marca del componente
     */
    @Column()
    marca: string;
    /**
     * El modelo del componente
     */
    @Column()
    modelo: string;
    /**
     * El numero de serie del componente
     */
    @Column()
    serie: string;
}
