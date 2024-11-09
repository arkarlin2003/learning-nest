import { Injectable } from '@nestjs/common';
import { CreaetMetaDto } from './dtos/create-metas.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Meta } from './metas.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MetasService {
    constructor(
        @InjectRepository(Meta)
        private metaRepository:Repository<Meta>
    ){}

    public async getMetas(){
        return await this.metaRepository.find()
    }

    public async createMeta(creaetMetaDto:CreaetMetaDto){
        const existMeta = await this.metaRepository.findOne({
            where:{name:creaetMetaDto.name}
        })

        if(existMeta) return existMeta;

        const newMeta = await this.metaRepository.create(creaetMetaDto)
        return await this.metaRepository.save(newMeta)
    }
}
