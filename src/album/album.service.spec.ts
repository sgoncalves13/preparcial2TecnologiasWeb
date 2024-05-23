import { Test, TestingModule } from '@nestjs/testing';
import { AlbumService } from './album.service';
import { TypeOrmTestingConfig } from '../shared/testing-utils/typeorm-testing-config';
import { AlbumEntity } from './album.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UsuarioService } from '../usuario/usuario.service';
import { FotoService } from '../foto/foto.service';
import { RedsocialService } from '../redsocial/redsocial.service';
import { AlbumFotoService } from '../album-foto/album-foto.service';

describe('AlbumService', () => {
  let service: AlbumService;
  let repository: Repository<AlbumEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers : [AlbumService, UsuarioService, FotoService, RedsocialService, AlbumFotoService],
    }).compile();

    service = module.get<AlbumService>(AlbumService);
    repository = module.get<Repository<AlbumEntity>>(getRepositoryToken(AlbumEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
