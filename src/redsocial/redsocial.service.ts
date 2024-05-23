import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RedsocialEntity } from './redsocial.entity';
import { RedsocialDTO } from './redsocial.dto';



@Injectable()
export class RedsocialService {

    constructor(
        @InjectRepository(RedsocialEntity)
        private readonly redsocialRepository: Repository<RedsocialEntity>
    ){}

    async createRedSocial(RedsocialDTO: RedsocialDTO): Promise<RedsocialEntity> {

        if (!RedsocialDTO.slogan || RedsocialDTO.slogan.trim() === '') {
            throw new Error('El slogan no debe ser vacío');
        }
        else if (RedsocialDTO.slogan.length < 20){
            throw new Error('El slogan debe tener por lo menos 20 caracteres');
        }

        const newRedSocial = this.redsocialRepository.create(RedsocialDTO);
        return await this.redsocialRepository.save(newRedSocial);
      }
        
}

