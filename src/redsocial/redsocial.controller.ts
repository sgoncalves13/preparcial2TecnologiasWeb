import { Body, Controller, Post } from '@nestjs/common';
import { RedsocialService } from './redsocial.service';
import { RedsocialDTO } from './redsocial.dto';

@Controller('redsocial')
export class RedsocialController {
    constructor(private readonly redsocialService: RedsocialService) {}

  @Post()
  createRedSocial(@Body() createredsocialDTO: RedsocialDTO) {
    return this.redsocialService.createRedSocial(createredsocialDTO);
  }
}
