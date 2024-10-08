import { PartialType } from '@nestjs/mapped-types';
import { CreateDireccionesMacDto } from './create-direcciones_mac.dto';

export class UpdateDireccionesMacDto extends PartialType(CreateDireccionesMacDto) {}
