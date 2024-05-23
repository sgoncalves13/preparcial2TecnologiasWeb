/* eslint-disable prettier/prettier */
import {IsDate, IsNotEmpty, IsString, IsUrl} from 'class-validator';
export class UsuarioDTO {

 @IsString()
 @IsNotEmpty()
 readonly nombre: string;
 
 @IsString()
 @IsNotEmpty()
 readonly telefono: string;
}