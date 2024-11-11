import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsPositive()
  limit?: number = 10;

  @ApiProperty({
    required: false,
  })
  @IsOptional()
  @IsPositive()
  page?: number = 1;
}
