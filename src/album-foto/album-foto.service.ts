import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlbumEntity } from '../album/album.entity';
import { FotoEntity } from '../foto/foto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlbumFotoService {
    constructor(
        @InjectRepository(AlbumEntity)
        private readonly albumRepository: Repository<AlbumEntity>,
    
        @InjectRepository(FotoEntity)
        private readonly fotoRepository: Repository<FotoEntity>
    ) {}

    async addFotoAlbum(albumId: number, fotoId: number): Promise<AlbumEntity | string> {
        const foto: FotoEntity = await this.fotoRepository.findOne({where: {id: fotoId}});
        if (!foto)
          return "La foto con el id dado no fue encotrada";
      
        const album: AlbumEntity = await this.albumRepository.findOne({where: {id: albumId}, relations: ['fotos']})
        if (!album)
            return "El album con el id dado no fue encotrad0";
        
        if (new Date(foto.fecha) <= new Date(album.fechaFin) && new Date(foto.fecha) >= new Date(album.fechaInicio)) {
            album.fotos = [...album.fotos, foto];
            return await this.albumRepository.save(album);
        }else {
            return " La fecha de la foto debe estar dentro del rango de las fechas del album"
        }
    

      }
}
