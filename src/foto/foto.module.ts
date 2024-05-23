import { Module } from '@nestjs/common';
import { FotoService } from './foto.service';
import { FotoController } from './foto.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FotoEntity } from './foto.entity';
import { AlbumEntity } from '../album/album.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FotoEntity, AlbumEntity])],
  providers: [FotoService, ],
  controllers: [FotoController]
})
export class FotoModule {}
