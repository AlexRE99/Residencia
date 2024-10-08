import { Injectable } from '@nestjs/common';
import { CreateDireccionesMacDto } from './dto/create-direcciones_mac.dto';
import { UpdateDireccionesMacDto } from './dto/update-direcciones_mac.dto';

@Injectable()
export class DireccionesMacService {
  create(createDireccionesMacDto: CreateDireccionesMacDto) {
    return 'This action adds a new direccionesMac';
  }

  findAll() {
    return `This action returns all direccionesMac`;
  }

  findOne(id: number) {
    return `This action returns a #${id} direccionesMac`;
  }

  update(id: number, updateDireccionesMacDto: UpdateDireccionesMacDto) {
    return `This action updates a #${id} direccionesMac`;
  }

  remove(id: number) {
    return `This action removes a #${id} direccionesMac`;
  }
}
