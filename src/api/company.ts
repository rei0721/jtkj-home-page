import type { PageData, PaginationParams } from '@/types/api';
import type { CompanyMetric } from '@/types/stat';

// 假数据 - 公司实力指标
const mockCompanyMetrics: CompanyMetric[] = [
  {
    id: 1,
    name: '项目总投资',
    value: 3.2,
    unit: '亿+',
    prefixSymbol: '¥',
    suffixText: '亿+',
    description: '公司总投资规模达80亿元',
    metricType: 'financial',
    orderIndex: 1,
    isHighlight: '1',
    status: '1',
  },
  {
    id: 2,
    name: '公司占地面积',
    value: 103,
    unit: '亩',
    suffixText: '亩',
    description: '生产基地占地面积',
    metricType: 'scale',
    orderIndex: 2,
    isHighlight: '1',
    status: '1',
  },
  {
    id: 3,
    name: '年销售额',
    value: 1,
    unit: '亿+',
    prefixSymbol: '¥',
    suffixText: '亿+',
    description: '年度销售收入',
    metricType: 'financial',
    orderIndex: 3,
    isHighlight: '1',
    status: '1',
  },
  {
    id: 4,
    name: '研发专利',
    value: 30,
    unit: '项+',
    suffixText: '项+',
    description: '累计获得专利数量',
    metricType: 'tech',
    orderIndex: 4,
    isHighlight: '1',
    status: '1',
  },
  {
    id: 5,
    name: '员工总数',
    value: 130,
    unit: '人+',
    suffixText: '人+',
    description: '公司员工规模',
    metricType: 'scale',
    orderIndex: 5,
    isHighlight: '0',
    status: '1',
  },
  {
    id: 6,
    name: '年产能',
    value: 300,
    unit: '万片',
    suffixText: '万片+',
    description: '年度生产能力',
    metricType: 'scale',
    orderIndex: 6,
    isHighlight: '0',
    status: '1',
  },
];

export async function getCompanyMetrics(
  params?: PaginationParams,
): Promise<PageData<CompanyMetric>> {
  // 模拟 API 延迟
  await new Promise((resolve) => setTimeout(resolve, 300));

  const current = params?.pageNum || 1;
  const size = params?.pageSize || 10;
  const start = (current - 1) * size;
  const end = start + size;
  const records = mockCompanyMetrics.slice(start, end);

  return {
    records,
    total: mockCompanyMetrics.length,
    current,
    size,
    pages: Math.ceil(mockCompanyMetrics.length / size),
  };
}
