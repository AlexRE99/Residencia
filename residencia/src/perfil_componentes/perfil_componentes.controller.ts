import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PerfilComponentesService } from './perfil_componentes.service';
import { CreatePerfilComponenteDto } from './dto/create-perfil_componente.dto';
import { UpdatePerfilComponenteDto } from './dto/update-perfil_componente.dto';

@Controller('perfil-componentes')
export class PerfilComponentesController {
  constructor(private readonly perfilComponentesService: PerfilComponentesService) {}

  @Post()
  create(@Body() createPerfilComponenteDto: CreatePerfilComponenteDto) {
    return this.perfilComponentesService.create(createPerfilComponenteDto);
  }

  @Get()
  findAll() {
    return this.perfilComponentesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.perfilComponentesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePerfilComponenteDto: UpdatePerfilComponenteDto) {
    return this.perfilComponentesService.update(+id, updatePerfilComponenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.perfilComponentesService.remove(+id);
  }
}
