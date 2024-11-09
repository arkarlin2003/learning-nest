import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from 'src/users/users.module';
import { PostsModule } from 'src/posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';
import { MetasModule } from 'src/metas/metas.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig  from 'src/config/app.config';
import databaseConfig from 'src/config/database.config';
import environmentValidation from 'src/config/environment.validation';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    MetasModule,
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:'.env',
      load:[appConfig,databaseConfig],
      validationSchema:environmentValidation
    }),
    TypeOrmModule.forRootAsync({
      imports:[],
      inject:[ConfigService],
      useFactory: (configService:ConfigService) => ({
        type: 'postgres',
        // entities: [User],
        autoLoadEntities:configService.get('database.autoLoadEntities'),
        synchronize: configService.get('database.synchronize'),
        port: configService.get('database.port'),
        host: configService.get('database.host'),
        username: configService.get('database.user'),
        password: configService.get('database.password'),
        database: configService.get('database.name'),
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
