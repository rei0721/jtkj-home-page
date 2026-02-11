export interface ContactInfo {
  id: number;
  createdAt?: string;
  updatedAt?: string;
  companyName?: string;
  companyEnName?: string;
  servicePhone?: string;
  emergencyPhone?: string;
  email?: string;
  fax?: string;
  address?: string;
  addressEn?: string;
  postalCode?: string;
  serviceHours?: string;
  emergencyContact?: string;
  longitude?: number;
  latitude?: number;
  mapImage?: string;
  qrCode?: string;
  wechatPublic?: string;
  wechatQrcode?: string;
  departmentContacts?: string;
  isDefault?: string;
  contactType?: 'headquarters' | 'branch' | 'factory';
  status?: string | number;
}

export interface ContactDisplay {
  phone: string;
  email: string;
  address: string;
}
