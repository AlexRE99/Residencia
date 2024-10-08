import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
/**
 * La entidad de las direcciones mac
 */
@Entity()
export class DireccionesMac {
    /**
     * La entidad de DirecciónMac
     */
    @PrimaryColumn()
    direccionMac: string
}
