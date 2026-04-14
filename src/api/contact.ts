import type { PageData, PaginationParams } from '@/types/api';
import type { ContactInfo } from '@/types/contact';
import type { ContactMessage } from '@/types/contactMessage';

// 假数据 - 联系信息
const mockContactInfos: ContactInfo[] = [
  {
    id: 1,
    companyName: '江天科技股份有限公司',
    companyEnName: 'Jiangtian Technology Co., Ltd.',
    servicePhone: '0818-8218666',
    emergencyPhone: '0818-8218666',
    email: 'jtkj@scjtkj.com',
    fax: '0818-8218666',
    address: '四川省达州市开江县普安镇经开大道',
    addressEn: "Jingkai Avenue, Pu'an Town, Kaijiang County, Dazhou City, Sichuan Province",
    postalCode: '636250',
    serviceHours: '周一至周五 9:00-18:00',
    emergencyContact: '193-8289-5171',
    longitude: 107.868,
    latitude: 31.085,
    mapImage: '',
    qrCode: '',
    wechatPublic: '江天科技',
    wechatQrcode: '',
    departmentContacts: JSON.stringify([
      { department: '业务咨询', phone: '193-8289-5171', email: 'jtkj@scjtkj.com' },
      { department: '技术支持', phone: '193-8289-5171', email: 'jtkj@scjtkj.com' },
      { department: '人力资源', phone: '193-8289-5171', email: 'jtkj@scjtkj.com' },
    ]),
    isDefault: '1',
    contactType: 'headquarters',
    status: '1',
  },
  {
    id: 2,
    companyName: '深圳研发中心',
    companyEnName: 'Shenzhen R\u0026D Center',
    servicePhone: '0818-8218666',
    emergencyPhone: '193-8289-5171',
    email: 'jtkj@scjtkj.com',
    fax: '0818-8218666',
    address: '中国·深圳高新技术产业园区科技南路88号',
    addressEn: 'No.88 Keji South Road, Shenzhen High-tech Park',
    postalCode: '518057',
    serviceHours: '周一至周五 9:00-18:00',
    emergencyContact: '193-8289-5171',
    longitude: 113.943,
    latitude: 22.548,
    mapImage: '',
    qrCode: '',
    wechatPublic: '江天科技',
    wechatQrcode: '',
    departmentContacts: '',
    isDefault: '0',
    contactType: 'branch',
    status: '1',
  },
];

// 模拟留言存储（内存中）
const mockContactMessages: ContactMessage[] = [];
let messageIdCounter = 1;

export async function getContactInfos(params?: PaginationParams): Promise<PageData<ContactInfo>> {
  // 模拟 API 延迟
  await new Promise((resolve) => setTimeout(resolve, 300));

  const current = params?.pageNum || 1;
  const size = params?.pageSize || 10;
  const start = (current - 1) * size;
  const end = start + size;
  const records = mockContactInfos.slice(start, end);

  return {
    records,
    total: mockContactInfos.length,
    current,
    size,
    pages: Math.ceil(mockContactInfos.length / size),
  };
}

export async function postContactMessage(data: ContactMessage): Promise<boolean> {
  // 模拟 API 延迟
  await new Promise((resolve) => setTimeout(resolve, 500));

  // 模拟存储留言
  const newMessage: ContactMessage = {
    ...data,
    id: messageIdCounter++,
    createdAt: new Date().toISOString(),
    status: 'pending',
    ipAddress: '127.0.0.1',
    userAgent: navigator.userAgent,
  };

  mockContactMessages.push(newMessage);

  console.log('[Mock API] Contact message saved:', newMessage);

  // 模拟 95% 成功率
  if (Math.random() > 0.95) {
    throw new Error('网络异常，请稍后重试');
  }

  return true;
}
