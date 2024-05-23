/* eslint-disable prettier/prettier */
import {IsDate, IsNotEmpty, IsString, IsUrl} from 'class-validator';
export class RedsocialDTO {

 @IsString()
 @IsNotEmpty()
 readonly nombre: string;
 
 @IsString()
 @IsNotEmpty()
 readonly slogan: string;
}