import { Test, TestingModule } from '@nestjs/testing';
import { faker } from '@faker-js/faker';
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
  let albumList: AlbumEntity[];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TypeOrmTestingConfig()],
      providers: [AlbumService, UsuarioService, FotoService, RedsocialService, AlbumFotoService],
    }).compile();

    service = module.get<AlbumService>(AlbumService);
    repository = module.get<Repository<AlbumEntity>>(getRepositoryToken(AlbumEntity));
    await seedDatabase();
  });

  const seedDatabase = async () => {
    await repository.clear();
    albumList = [];
    for (let i = 0; i < 5; i++) {
      const album = await repository.save({
        fechaInicio: faker.date.past(),
        fechaFin: faker.date.future(),
        titulo: faker.random.alphaNumeric(10),
        fotos: [] // Assuming `fotos` is an optional field
      });
      albumList.push(album);
    }
  };

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('delete should remove an album', async () => {
    const album = albumList[0];
    await service.deleteAlbum(album.id);
    const deletedAlbum = await repository.findOne({ where: { id: album.id } });
    expect(deletedAlbum).toBeNull();
  });
});
