import { Injectable } from '@nestjs/common';
import { CreateDetallesGeneraleDto } from './dto/create-detalles_generale.dto';
import { UpdateDetallesGeneraleDto } from './dto/update-detalles_generale.dto';

@Injectable()
export class DetallesGeneralesService {
  create(createDetallesGeneraleDto: CreateDetallesGeneraleDto) {
    return 'This action adds a new detallesGenerale';
  }

  findAll() {
    return `This action returns all detallesGenerales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detallesGenerale`;
  }

  update(id: number, updateDetallesGeneraleDto: UpdateDetallesGeneraleDto) {
    return `This action updates a #${id} detallesGenerale`;
  }

  remove(id: number) {
    return `This action removes a #${id} detallesGenerale`;
  }
}
