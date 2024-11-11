import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService:UsersService
  ){}

  @Post()
  createUser(@Body() createUserdto:CreateUserDto){
    return this.usersService.createUser(createUserdto)
  }


  @Get('/posts')
  getUserPosts(){
  }
}
