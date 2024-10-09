import { Injectable } from '@nestjs/common';
import { CreateInformaciónRedeDto } from './dto/create-información_rede.dto';
import { UpdateInformaciónRedeDto } from './dto/update-información_rede.dto';

@Injectable()
export class InformaciónRedesService {
  create(createInformaciónRedeDto: CreateInformaciónRedeDto) {
    return 'This action adds a new informaciónRede';
  }

  findAll() {
    return `This action returns all informaciónRedes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} informaciónRede`;
  }

  update(id: number, updateInformaciónRedeDto: UpdateInformaciónRedeDto) {
    return `This action updates a #${id} informaciónRede`;
  }

  remove(id: number) {
    return `This action removes a #${id} informaciónRede`;
  }
}
