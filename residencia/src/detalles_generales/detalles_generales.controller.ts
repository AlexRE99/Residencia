import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetallesGeneralesService } from './detalles_generales.service';
import { CreateDetallesGeneraleDto } from './dto/create-detalles_generale.dto';
import { UpdateDetallesGeneraleDto } from './dto/update-detalles_generale.dto';

@Controller('detalles-generales')
export class DetallesGeneralesController {
  constructor(private readonly detallesGeneralesService: DetallesGeneralesService) {}

  @Post()
  create(@Body() createDetallesGeneraleDto: CreateDetallesGeneraleDto) {
    return this.detallesGeneralesService.create(createDetallesGeneraleDto);
  }

  @Get()
  findAll() {
    return this.detallesGeneralesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detallesGeneralesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetallesGeneraleDto: UpdateDetallesGeneraleDto) {
    return this.detallesGeneralesService.update(+id, updateDetallesGeneraleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detallesGeneralesService.remove(+id);
  }
}
