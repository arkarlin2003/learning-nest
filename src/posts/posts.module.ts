import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Meta } from 'src/metas/metas.entity';
import { Post } from './posts.entity';
import { Pagination } from 'src/pagination/pagination';
import { PaginationModule } from 'src/pagination/pagination.module';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [TypeOrmModule.forFeature([Post, Meta]),PaginationModule],
})
export class PostsModule {}
