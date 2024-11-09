import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { ConfigType } from '@nestjs/config';
import profileConfig from './config/profile.config';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @Inject(profileConfig.KEY)
    private readonly profileConfiguration:ConfigType<typeof profileConfig>
  ) {}
  public async createUser(creaetUserDto: CreateUserDto) {
    const newUser = await this.userRepository.create(creaetUserDto);
    return await this.userRepository.save(newUser);
  }

  public async findOne(userId: number) {
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    return user;
  }
}
