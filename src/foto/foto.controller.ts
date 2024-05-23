import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FotoService } from './foto.service';
import { FotoDTO } from './foto.dto';

@Controller('foto')
export class FotoController {

  constructor(private readonly fotoService: FotoService) {}

  @Post()
  create(@Body() createFotoDto: FotoDTO) {
    return this.fotoService.createFoto(createFotoDto);
  }

  @Get('/all')
  findAllFotos() {
    return this.fotoService.findAllFotos();
  }

  @Get(':id')
  findAlbumbyId(@Param('id') id: number) {
    return this.fotoService.findFotosById(id);
  }


  @Delete(':id')
  deleteAlbum(@Param('id') id: number) {
    return this.fotoService.deleteFoto(id);
  }
}
