import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlbumEntity } from './album.entity';
import { AlbumDTO } from './album.dto';


@Injectable()
export class AlbumService {

    constructor(
        @InjectRepository(AlbumEntity)
        private readonly albumRepository: Repository<AlbumEntity>
    ){}

    async createAlbum(AlbumDTO: AlbumDTO): Promise<AlbumEntity> {

        if (!AlbumDTO.titulo || AlbumDTO.titulo.trim() === '') {
            throw new Error('The album title cannot be empty');
        }

        const newAlbum = this.albumRepository.create(AlbumDTO);
        return await this.albumRepository.save(newAlbum);
      }
        
      async findAlbumById(id: number): Promise<AlbumEntity | undefined> {
        return await this.albumRepository.findOne({ where: { id: id }, relations: ['fotos'] });
      }
        
      async deleteAlbum(id: number): Promise<String> {
        const album: AlbumEntity = await this.albumRepository.findOne({where: {id: id}, relations: ['fotos']})
        if (album.fotos.length > 0){
            throw new Error('No se puede borrar tiene albumes asociados');
        }
        await this.albumRepository.delete(id);
        return "Album " + id + " eliminado"
      }
}

