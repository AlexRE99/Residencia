import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComponentesService } from './componentes.service';
import { CreateComponenteDto } from './dto/create-componente.dto';
import { UpdateComponenteDto } from './dto/update-componente.dto';

@Controller('componentes')
export class ComponentesController {
  constructor(private readonly componentesService: ComponentesService) {}

  @Post()
  create(@Body() createComponenteDto: CreateComponenteDto) {
    return this.componentesService.create(createComponenteDto);
  }

  @Get()
  findAll() {
    return this.componentesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.componentesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComponenteDto: UpdateComponenteDto) {
    return this.componentesService.update(+id, updateComponenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.componentesService.remove(+id);
  }
}
