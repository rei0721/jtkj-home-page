export interface ApiResponse<T = unknown> {
  success: boolean;
  code: number;
  msg: string;
  data: T;
}

export interface PageData<T> {
  records: T[];
  total: number;
  size: number;
  current: number;
  pages?: number;
}

export interface PaginationParams {
  pageNum?: number;
  pageSize?: number;
}
