import { Injectable } from '@nestjs/common';
import { CreatePerfilComponenteDto } from './dto/create-perfil_componente.dto';
import { UpdatePerfilComponenteDto } from './dto/update-perfil_componente.dto';

@Injectable()
export class PerfilComponentesService {
  create(createPerfilComponenteDto: CreatePerfilComponenteDto) {
    return 'This action adds a new perfilComponente';
  }

  findAll() {
    return `This action returns all perfilComponentes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} perfilComponente`;
  }

  update(id: number, updatePerfilComponenteDto: UpdatePerfilComponenteDto) {
    return `This action updates a #${id} perfilComponente`;
  }

  remove(id: number) {
    return `This action removes a #${id} perfilComponente`;
  }
}
