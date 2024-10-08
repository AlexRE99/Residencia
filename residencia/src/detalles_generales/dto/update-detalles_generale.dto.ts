import { PartialType } from '@nestjs/mapped-types';
import { CreateDetallesGeneraleDto } from './create-detalles_generale.dto';

export class UpdateDetallesGeneraleDto extends PartialType(CreateDetallesGeneraleDto) {}
