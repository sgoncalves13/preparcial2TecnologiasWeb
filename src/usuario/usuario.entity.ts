/* eslint-disable prettier/prettier */
import { FotoEntity } from '../foto/foto.entity';
import { RedsocialEntity } from '../redsocial/redsocial.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UsuarioEntity { 
 @PrimaryGeneratedColumn()
 id: number;
    
 @Column()
 nombre: string;

 @Column()
 telefono: string;

 @ManyToOne(() => RedsocialEntity, redsocial => redsocial.usuario)
 redsocial: RedsocialEntity;

 @OneToMany(() => FotoEntity, foto => foto.usuario)
 fotos: FotoEntity[];


}