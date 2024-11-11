import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { PaginationQueryDto } from 'src/common/pagination/dtos/pagination-query.dto';
import { ObjectLiteral, Repository } from 'typeorm';
import { Paginated } from './interface/pagination.interface';

@Injectable()
export class Pagination {
  constructor(@Inject(REQUEST) private readonly request: Request) {}
  public async paginateQuery<T extends ObjectLiteral>(
    paginationQueryDto: PaginationQueryDto,
    repository: Repository<T>,
  ) {
    const results = await repository.find({
      skip: (paginationQueryDto.page - 1) * paginationQueryDto.limit,
      take: paginationQueryDto.limit,
    });
    const totalItems = await repository.count();

    const finalResults: Paginated<T> = {
      data: results,
      meta: {
        itemPerPage: paginationQueryDto.limit,
        totalItem: totalItems,
        currentPage: paginationQueryDto.page,
        totalPages: Math.ceil(totalItems / paginationQueryDto.limit),
      },
    };

    return finalResults;
  }
}
