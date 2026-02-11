import { useState, useEffect } from 'react';
import { getContactInfos } from '@/api/contact';
import type { ContactInfo, ContactDisplay } from '@/types/contact';

export function useContactInfo(): {
  contact: ContactDisplay | null;
  loading: boolean;
  error: string | null;
} {
  const [contact, setContact] = useState<ContactDisplay | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const data = await getContactInfos({ pageNum: 1, pageSize: 100 });
        console.log('[API] Contact info response:', data);
        console.log('[API] Records count:', data.records?.length || 0);

        if (!data.records || data.records.length === 0) {
          console.log('[API] No records found, using fallback');
          setContact(null);
          return;
        }

        // Filter enabled records (status can be '0', '1', 0, or 1)
        const enabledRecords = data.records.filter((item: ContactInfo) => {
          const isEnabled =
            item.status === '0' || item.status === '1' || item.status === 0 || item.status === 1;
          console.log(`[API] Record ${item.id} status:`, item.status, 'enabled:', isEnabled);
          return isEnabled;
        });

        console.log('[API] Enabled records:', enabledRecords.length);

        if (enabledRecords.length === 0) {
          console.log('[API] No enabled records, using first record as fallback');
          // Use first record even if status doesn't match
          const first = data.records[0];
          setContact({
            phone: first.servicePhone || first.emergencyPhone || '',
            email: first.email || '',
            address: first.address || '',
          });
          return;
        }

        // Sort by createdAt desc to get the latest
        const sorted = enabledRecords.sort((a: ContactInfo, b: ContactInfo) => {
          const aTime = a.createdAt ? new Date(a.createdAt).getTime() : 0;
          const bTime = b.createdAt ? new Date(b.createdAt).getTime() : 0;
          return bTime - aTime;
        });

        const latest = sorted[0];
        console.log('[API] Using record:', latest);
        setContact({
          phone: latest.servicePhone || latest.emergencyPhone || '',
          email: latest.email || '',
          address: latest.address || '',
        });
      } catch (err) {
        console.error('[API] Error fetching contact:', err);
        setError(err instanceof Error ? err.message : '加载失败');
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, []);

  return { contact, loading, error };
}
