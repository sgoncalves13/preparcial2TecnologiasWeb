import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioDTO } from './usuario.dto';


@Injectable()
export class UsuarioService {

    constructor(
        @InjectRepository(UsuarioEntity)
        private readonly usuarioRepository: Repository<UsuarioEntity>
    ){}

    async createUsuario(UsuarioDTO: UsuarioDTO): Promise<UsuarioEntity | string> {

        if (UsuarioDTO.telefono.length !== 10) {
          return 'El telefono debe ser de 10 caracteres';
        }

        const newUsuario = this.usuarioRepository.create(UsuarioDTO);
        return await this.usuarioRepository.save(newUsuario);
      }
        
      async findUsuarioById(id: number): Promise<UsuarioEntity | undefined> {
        return await this.usuarioRepository.findOne({ where: { id: id }, relations: ["redsocial", "fotos"]});
      }

      async findAllUsuarios(): Promise<UsuarioEntity[]> {
        return await this.usuarioRepository.find({relations: ["redsocial", "fotos"]});
      }
        
}

