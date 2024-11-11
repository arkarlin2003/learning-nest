import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { GetPostDto } from './dtos/get-post.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService:PostsService){}

    @ApiOperation({summary:'all posts'})
    @ApiResponse({
        status:200,
        description:'hey'
    })
    @Get()
    getPosts(@Query() getPostDto:GetPostDto){
        return this.postsService.findAll(getPostDto,1)
    }



    @Get('/:userId')
    getPost(@Param('userId') userId:number,@Query() getPostDto:GetPostDto){
        return this.postsService.findAll(getPostDto,userId)
    }

    @Post()
    createPost(@Body() createPostDto:CreatePostDto){
        return this.postsService.createPost(createPostDto)
    }

    @Delete('/:postId')
    deletePost(@Param('postId') postId:number ){
        return this.postsService.deletePost(postId)
    }
}
