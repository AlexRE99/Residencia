import { Injectable } from '@nestjs/common';
import { CreatePropiedadDto } from './dto/create-propiedad.dto';
import { UpdatePropiedadDto } from './dto/update-propiedad.dto';

@Injectable()
export class PropiedadService {
  create(createPropiedadDto: CreatePropiedadDto) {
    return 'This action adds a new propiedad';
  }

  findAll() {
    return `This action returns all propiedad`;
  }

  findOne(id: number) {
    return `This action returns a #${id} propiedad`;
  }

  update(id: number, updatePropiedadDto: UpdatePropiedadDto) {
    return `This action updates a #${id} propiedad`;
  }

  remove(id: number) {
    return `This action removes a #${id} propiedad`;
  }
}
