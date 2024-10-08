import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
/**
 * La entidad de componente
 */
@Entity()
export class Componente {
    /**
     * La llave primaria del componente
     */
    @PrimaryGeneratedColumn('uuid')
    idComponente: string;
    /**
     * El tipo del componente
     */
    @Column()
    tipo: string;
    /**
     * La clasificacion del componente
     */
    @Column()
    clasificacion: string;
    /**
     * La id de la propiedad relacionada
     */ 
    // @ManyToOne(() => Propiedad, ( propiedad ) => propiedad.componente )
    // @JoinColumn( { name: "idPropiedad" } )
    // propiedad: Propiedad;   
    @Column()
    PoE: boolean;             
}
