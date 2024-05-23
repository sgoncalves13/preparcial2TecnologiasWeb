/* eslint-disable prettier/prettier */
import { FotoEntity } from 'src/foto/foto.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AlbumEntity { 
@PrimaryGeneratedColumn()
 id: number;
    
 @Column()
 fechaInicio: Date;

 @Column()
 fechaFin: Date;

 @Column()
 titulo: string;

 @OneToMany(() => FotoEntity, foto => foto.album)
 fotos: FotoEntity[];

}