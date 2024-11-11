import { ApiProperty, IntersectionType } from "@nestjs/swagger";
import { IsDate, IsOptional } from "class-validator";
import { PaginationQueryDto } from "src/common/pagination/dtos/pagination-query.dto";


class GetPostBaseDto {
    
    @ApiProperty({
        required:false
    })
    @IsOptional()
    @IsDate()
    startDate?:Date

    @ApiProperty({
        required:false
    })
    @IsOptional()
    @IsDate()
    endDate?:Date
}


export class GetPostDto extends IntersectionType(GetPostBaseDto,PaginationQueryDto){}