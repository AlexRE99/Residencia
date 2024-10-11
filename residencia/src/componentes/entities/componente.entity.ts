import { Area } from "src/area/entities/area.entity";
import { Asignacione } from "src/asignaciones/entities/asignacione.entity";
import { DetallesGenerales } from "src/detalles_generales/entities/detalles_generales.entity";
import { Etiqueta } from "src/etiquetas/entities/etiqueta.entity";
import { InformaciónRede } from "src/información_redes/entities/información_rede.entity";
import { PerfilComponente } from "src/perfil_componentes/entities/perfil_componente.entity";
import { Propiedad } from "src/propiedad/entities/propiedad.entity";
import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @Column()
    @Index({ unique: true })
    direccion_mac: string;   
    
    @Column()
    puertos: number;
    
    @ManyToOne(() => Area, area => area.componentes)
    @JoinColumn()
    area: Area;

    @ManyToOne( () => Propiedad, propiedad => propiedad.componente )
    @JoinColumn()
    propiedad: Propiedad;

    @OneToOne( () => DetallesGenerales, detalles_generales => detalles_generales.componente )
    detalles_generales: DetallesGenerales;

    @OneToMany( () => PerfilComponente, perfil_componente => perfil_componente.componente_perfil )
    componente_perfil: PerfilComponente[];

    @OneToMany( () => Etiqueta, etiqueta_componente => etiqueta_componente.componente_etiqueta)
    etiqueta_componente: Etiqueta[];

    @OneToOne( () => InformaciónRede, info_componente => info_componente.componente_info )
    informacion_componente: InformaciónRede;

    @OneToOne( () => Asignacione, componente_asig => componente_asig.asig_componente)
    compo_asignacion: Asignacione;
}
