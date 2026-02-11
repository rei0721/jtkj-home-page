import { get } from '@/utils/request';
import type { PageData, PaginationParams } from '@/types/api';
import type { CompanyMetric } from '@/types/stat';

export async function getCompanyMetrics(
  params?: PaginationParams,
): Promise<PageData<CompanyMetric>> {
  return get<PageData<CompanyMetric>>('/api/company-metrics', { params });
}
