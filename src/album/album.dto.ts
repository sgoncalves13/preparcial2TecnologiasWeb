/* eslint-disable prettier/prettier */
import {IsDate, IsNotEmpty, IsString, IsUrl} from 'class-validator';
export class AlbumDTO {

 @IsDate()
 @IsNotEmpty()
 readonly fechaIncio: Date;
 
 @IsDate()
 @IsNotEmpty()
 readonly fechaFin: Date;
 
 @IsString()
 @IsNotEmpty()
 readonly titulo: string;
}
/* archivo: src/museum/museum.dto.ts */