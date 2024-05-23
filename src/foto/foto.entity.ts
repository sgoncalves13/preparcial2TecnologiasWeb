/* eslint-disable prettier/prettier */
import { AlbumEntity } from 'src/album/album.entity';
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FotoEntity { 
@PrimaryGeneratedColumn()
id: number;
    
 @Column()
 ISO: number;

 @Column()
 velObturacion: number;
 
 @Column()
 apertura: number;
 
 @Column()
 fecha: string;

 @ManyToOne(() => UsuarioEntity, usuario => usuario.fotos)
 usuario: UsuarioEntity;

 @ManyToOne(() => AlbumEntity, album => album.fotos)
 album: AlbumEntity;

}