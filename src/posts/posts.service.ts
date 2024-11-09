import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Meta } from 'src/metas/metas.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dtos/create-post.dto';
import { Post } from './posts.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PostsService {

    constructor(
        // private readonly usersService:UsersService,
        @InjectRepository(Post)
        private postRepository:Repository<Post>,
        @InjectRepository(Meta)
        private metaRepository:Repository<Meta>,

        private readonly configService:ConfigService
    ){}

    public async findAll(userId:number){
        const port = this.configService.get('PORT')
        console.log({port})
        return await this.postRepository.find()
    }

    public async createPost(createPostDto:CreatePostDto){
        let newPost = await this.postRepository.create({...createPostDto})
        return await this.postRepository.save(newPost)
    }

    public async deletePost(postId:number){
        await this.postRepository.delete(postId)
        return {message:'deleted'}
    }
}
