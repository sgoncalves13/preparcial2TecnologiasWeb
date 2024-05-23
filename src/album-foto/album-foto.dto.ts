/* eslint-disable prettier/prettier */
import {IsDate, IsNotEmpty, IsNumber, IsString, IsUrl} from 'class-validator';
export class AlbumFotoDTO {

 @IsNumber()
 @IsNotEmpty()
 readonly idAlbum: number;
 
 @IsNumber()
 @IsNotEmpty()
 readonly idFoto: number;
}