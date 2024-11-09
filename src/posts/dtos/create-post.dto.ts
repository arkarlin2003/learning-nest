import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsNotEmpty, IsString } from "class-validator"
import { CreaetMetaDto } from "src/metas/dtos/create-metas.dto"


export class CreatePostDto{

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title:string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    slug:string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    content:string

    @ApiProperty()
    @IsNotEmpty()
    @Type(()=>CreaetMetaDto)
    meta:CreaetMetaDto
}