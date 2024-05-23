/* eslint-disable prettier/prettier */
import { UsuarioEntity } from 'src/usuario/usuario.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RedsocialEntity { 
@PrimaryGeneratedColumn()
 id: number;
    
 @Column()
 nombre: string;

 @Column()
 slogan: string;

 @OneToMany(() => UsuarioEntity, usuario => usuario.redsocial)
 usuario: UsuarioEntity[];

}