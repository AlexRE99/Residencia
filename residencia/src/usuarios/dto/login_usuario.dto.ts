import { MaxLength } from "class-validator";
/**
 * Modelo para la creacion de usuarios
 */
export class LoginUsuarioDto {
    /**
     * es el nombre del usuario con el cual se identifica
     */
    @MaxLength(25)
    nombreUsuario: string;

    @MaxLength(25)
    password: string;
}
