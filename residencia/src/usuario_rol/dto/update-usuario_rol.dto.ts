import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioRolDto } from './create-usuario_rol.dto';

export class UpdateUsuarioRolDto extends PartialType(CreateUsuarioRolDto) {}
