import { PartialType } from '@nestjs/mapped-types';
import { CreateInformaciónRedeDto } from './create-información_rede.dto';

export class UpdateInformaciónRedeDto extends PartialType(CreateInformaciónRedeDto) {}
