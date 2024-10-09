import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InformaciónRedesService } from './información_redes.service';
import { CreateInformaciónRedeDto } from './dto/create-información_rede.dto';
import { UpdateInformaciónRedeDto } from './dto/update-información_rede.dto';

@Controller('información-redes')
export class InformaciónRedesController {
  constructor(private readonly informaciónRedesService: InformaciónRedesService) {}

  @Post()
  create(@Body() createInformaciónRedeDto: CreateInformaciónRedeDto) {
    return this.informaciónRedesService.create(createInformaciónRedeDto);
  }

  @Get()
  findAll() {
    return this.informaciónRedesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.informaciónRedesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInformaciónRedeDto: UpdateInformaciónRedeDto) {
    return this.informaciónRedesService.update(+id, updateInformaciónRedeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.informaciónRedesService.remove(+id);
  }
}
