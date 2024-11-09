import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Meta } from 'src/metas/metas.entity';
import { Post } from './posts.entity';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports:[TypeOrmModule.forFeature([Post,Meta])]
})
export class PostsModule {}
