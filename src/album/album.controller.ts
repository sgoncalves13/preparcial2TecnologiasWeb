import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AlbumService } from './album.service';
import { AlbumDTO } from './album.dto';

@Controller('album')
export class AlbumController {
    constructor(private readonly albumService: AlbumService) {}

  @Post()
  create(@Body() createAlbumDto: AlbumDTO) {
    return this.albumService.createAlbum(createAlbumDto);
  }

  @Get(':id')
  findAlbumbyId(@Param('id') id: number) {
    return this.albumService.findAlbumById(id);
  }

  @Delete(':id')
  deleteAlbum(@Param('id') id: number) {
    return this.albumService.deleteAlbum(id);
  }
}
