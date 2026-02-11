import { useState, useEffect } from 'react';
import { getCompanyMetrics } from '@/api/company';
import type { CompanyMetric, StatItem } from '@/types/stat';

export function useCompanyMetrics(): { stats: StatItem[]; loading: boolean; error: string | null } {
  const [stats, setStats] = useState<StatItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const data = await getCompanyMetrics({ pageNum: 1, pageSize: 100 });
        const metrics: StatItem[] = data.records.map((item: CompanyMetric) => ({
          id: item.id,
          label: item.name,
          value: item.value,
          suffix: item.suffixText || item.unit || '',
          prefix: item.prefixSymbol,
        }));
        // Sort by orderIndex if available
        const sorted = metrics.sort((a, b) => {
          const aIndex = data.records.find((r) => r.id === a.id)?.orderIndex ?? 0;
          const bIndex = data.records.find((r) => r.id === b.id)?.orderIndex ?? 0;
          return aIndex - bIndex;
        });
        setStats(sorted);
      } catch (err) {
        setError(err instanceof Error ? err.message : '加载失败');
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  return { stats, loading, error };
}
