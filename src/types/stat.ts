export interface CompanyMetric {
  id: number;
  createdAt?: string;
  updatedAt?: string;
  name: string;
  enName?: string;
  value: number;
  unit?: string;
  prefixSymbol?: string;
  suffixText?: string;
  description?: string;
  iconClass?: string;
  metricType?: 'financial' | 'scale' | 'tech' | 'other';
  orderIndex?: number;
  isHighlight?: string;
  status?: string;
}

export interface StatItem {
  id: number;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
}
