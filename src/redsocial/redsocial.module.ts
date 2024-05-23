import { Module } from '@nestjs/common';
import { RedsocialService } from './redsocial.service';
import { RedsocialController } from './redsocial.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedsocialEntity } from './redsocial.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RedsocialEntity])],
  providers: [RedsocialService],
  controllers: [RedsocialController]
})
export class RedsocialModule {}
