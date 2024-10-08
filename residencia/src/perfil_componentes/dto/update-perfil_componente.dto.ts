import { PartialType } from '@nestjs/mapped-types';
import { CreatePerfilComponenteDto } from './create-perfil_componente.dto';

export class UpdatePerfilComponenteDto extends PartialType(CreatePerfilComponenteDto) {}
