export interface Paginated<T> {
  data: T[];
  meta: {
    itemPerPage: number;
    totalItem: number;
    currentPage: number;
    totalPages: number;
  }
}
