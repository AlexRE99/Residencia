import { Injectable } from '@nestjs/common';
import { CreatePuertoDto } from './dto/create-puerto.dto';
import { UpdatePuertoDto } from './dto/update-puerto.dto';

@Injectable()
export class PuertosService {
  create(createPuertoDto: CreatePuertoDto) {
    return 'This action adds a new puerto';
  }

  findAll() {
    return `This action returns all puertos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} puerto`;
  }

  update(id: number, updatePuertoDto: UpdatePuertoDto) {
    return `This action updates a #${id} puerto`;
  }

  remove(id: number) {
    return `This action removes a #${id} puerto`;
  }
}
