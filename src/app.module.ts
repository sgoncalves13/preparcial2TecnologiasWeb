import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FotoModule } from './foto/foto.module';
import { UsuarioModule } from './usuario/usuario.module';
import { RedsocialModule } from './redsocial/redsocial.module';
import { AlbumModule } from './album/album.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FotoEntity } from './foto/foto.entity';
import { UsuarioEntity } from './usuario/usuario.entity';
import { RedsocialEntity } from './redsocial/redsocial.entity';
import { AlbumEntity } from './album/album.entity';
import { AlbumFotoService } from './album-foto/album-foto.service';
import { FotoService } from './foto/foto.service';
import { AlbumService } from './album/album.service';
import { RedsocialService } from './redsocial/redsocial.service';
import { UsuarioService } from './usuario/usuario.service';
import { AlbumFotoModule } from './album-foto/album-foto.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

@Module({
  imports: [FotoModule, UsuarioModule, RedsocialModule, AlbumModule, AlbumFotoModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'redsocial',
      entities: [FotoEntity, UsuarioEntity, RedsocialEntity, AlbumEntity],
      dropSchema: true,
      synchronize: true,
      keepConnectionAlive: true
    }),
    AlbumFotoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
