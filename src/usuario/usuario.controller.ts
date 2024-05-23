import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioDTO } from './usuario.dto';

@Controller('usuario')
export class UsuarioController {
    constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  createUsuario(@Body() createusuarioDTO: UsuarioDTO) {
    return this.usuarioService.createUsuario(createusuarioDTO);
  }

  @Get(':id')
  findUsuarioById(@Param('id') id: number) {
    return this.usuarioService.findUsuarioById(id);
  }

  @Get('/all')
  findAllUsuarios() {
    return this.usuarioService.findAllUsuarios();
  }
}
