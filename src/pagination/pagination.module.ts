import { Module } from '@nestjs/common';
import { Pagination } from './pagination';

@Module({
  providers: [Pagination],
  exports:[Pagination]
})
export class PaginationModule {}
