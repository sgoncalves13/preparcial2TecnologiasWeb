import { Body, Controller, Param, Post } from '@nestjs/common';
import { AlbumFotoService } from './album-foto.service';
import { AlbumFotoDTO } from './album-foto.dto';

@Controller('album-foto')
export class AlbumFotoController {
    constructor(private readonly albumfotoService: AlbumFotoService) {}

    @Post('/addFotoAlbum')
    async addFotoAlbum(@Body() createAlbumFotoDto: AlbumFotoDTO): Promise<any> {
        return await this.albumfotoService.addFotoAlbum(createAlbumFotoDto.idAlbum, createAlbumFotoDto.idFoto);
    }

}
