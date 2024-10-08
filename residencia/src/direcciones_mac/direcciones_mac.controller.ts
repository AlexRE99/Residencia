import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DireccionesMacService } from './direcciones_mac.service';
import { CreateDireccionesMacDto } from './dto/create-direcciones_mac.dto';
import { UpdateDireccionesMacDto } from './dto/update-direcciones_mac.dto';

@Controller('direcciones-mac')
export class DireccionesMacController {
  constructor(private readonly direccionesMacService: DireccionesMacService) {}

  @Post()
  create(@Body() createDireccionesMacDto: CreateDireccionesMacDto) {
    return this.direccionesMacService.create(createDireccionesMacDto);
  }

  @Get()
  findAll() {
    return this.direccionesMacService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.direccionesMacService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDireccionesMacDto: UpdateDireccionesMacDto) {
    return this.direccionesMacService.update(+id, updateDireccionesMacDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.direccionesMacService.remove(+id);
  }
}
