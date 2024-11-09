import { Module } from '@nestjs/common';
import { MetasController } from './metas.controller';
import { MetasService } from './metas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Meta } from './metas.entity';

@Module({
  controllers: [MetasController],
  providers: [MetasService],
  imports:[TypeOrmModule.forFeature([Meta])]
})
export class MetasModule {}
