import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreaetMetaDto } from './dtos/create-metas.dto';
import { MetasService } from './metas.service';

@Controller('metas')
export class MetasController {

    constructor(private readonly metasService:MetasService){}

    @Get()
    getMetas(){
        return this.metasService.getMetas()
    }

    @Post()
    createMeta(@Body() createMetaDto:CreaetMetaDto){
        return this.metasService.createMeta(createMetaDto)
    }
}
