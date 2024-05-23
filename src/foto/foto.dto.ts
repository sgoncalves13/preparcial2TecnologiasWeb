/* eslint-disable prettier/prettier */
import {IsDate, IsNotEmpty, IsNumber, IsString, IsUrl} from 'class-validator';
export class FotoDTO {

 @IsNumber()
 @IsNotEmpty()
 readonly ISO: number;
 
 @IsNumber()
 @IsNotEmpty()
 readonly velObturacion: number;

 @IsNumber()
 @IsNotEmpty()
 readonly apertura: number;

 @IsString()
 @IsNotEmpty()
 readonly fecha: string;
}