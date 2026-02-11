import { get, post } from '@/utils/request';
import type { ApiResponse, PageData, PaginationParams } from '@/types/api';
import type { ContactInfo } from '@/types/contact';
import type { ContactMessage } from '@/types/contactMessage';

export async function getContactInfos(params?: PaginationParams): Promise<PageData<ContactInfo>> {
  return get<PageData<ContactInfo>>('/api/contact-infos', { params });
}

export async function postContactMessage(data: ContactMessage): Promise<boolean> {
  const res = await post<ApiResponse<boolean>>('/api/contact-messages', data);
  return res.data;
}
