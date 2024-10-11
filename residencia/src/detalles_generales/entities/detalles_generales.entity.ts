import { Componente } from "src/componentes/entities/componente.entity";
import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

/**
 * Los detalles generales de un componente
 */
@Entity()
@Index(["marca", "modelo", "serie"], { unique: true })
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

    @OneToOne( () => Componente, componente => componente.detalles_generales )
    @JoinColumn()
    componente: Componente;

}
