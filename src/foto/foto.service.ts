import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FotoEntity } from './foto.entity';
import { FotoDTO } from './foto.dto';
import { AlbumEntity } from '../album/album.entity';



@Injectable()
export class FotoService {

    constructor(
        @InjectRepository(FotoEntity)
        private readonly fotoRepository: Repository<FotoEntity>,
        @InjectRepository(AlbumEntity)
        private readonly albumRepository: Repository<AlbumEntity>
    ){}

    async createFoto(FotoDTO: FotoDTO): Promise<FotoEntity | string> {

        let conteo = 0;
        

        if(FotoDTO.ISO < 100 || FotoDTO.ISO > 6400){
            return 'El ISO debe estar entre 100 y 6400';
        }
        if (FotoDTO.ISO > ((6400+100)/2)){
            conteo += 1;
        }


        if (FotoDTO.velObturacion < 1 || FotoDTO.velObturacion > 32){
            return 'El velObturacion debe estar entre 1 y 32';
        }
        if (FotoDTO.velObturacion > ((32+1)/2)){
            conteo += 1;
        }

        if (FotoDTO.apertura < 2 || FotoDTO.apertura > 250){
            return 'La apertura debe estar entre 2 y 250';
        }
        if (FotoDTO.ISO > ((250+2)/2)){
            conteo += 1;
        }

        if (conteo > 2){
            return 'Maximo 2 pueden estar por encima del valor medio de sus cotas';
        }


        const newFoto = this.fotoRepository.create(FotoDTO);
        return await this.fotoRepository.save(newFoto);
      }
        
      async findFotosById(id: number): Promise<FotoEntity | undefined> {
        return await this.fotoRepository.findOne({ where: { id: id } , relations: ['usuario', 'album']});
      }

      async findAllFotos(): Promise<FotoEntity[]> {
        return await this.fotoRepository.find({relations: ["usuario", "album"]});
      }
        
      async deleteFoto(id: number): Promise<String> {
        const foto: FotoEntity = await this.fotoRepository.findOne({where: {id: id}, relations: ["usuario", "album"]})
        const album = await this.albumRepository.findOne({where: { id: foto.album.id }, relations: ["fotos"]});
        
        if (album && album.fotos.length === 1){
            await this.fotoRepository.delete(id);
            await this.albumRepository.delete(album.id);
            return `Álbum ${album.id} y foto ${id} eliminados`;
        }
        
        await this.fotoRepository.delete(id);
        return `Foto ${id} eliminada`;
      }
}

