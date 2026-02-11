export interface ContactMessage {
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  type?: string;
  name?: string;
  phone?: string;
  email?: string;
  company?: string;
  subject?: string;
  message?: string;
  status?: string;
  ipAddress?: string;
  userAgent?: string;
  sourcePage?: string;
  adminNotes?: string;
  responseContent?: string;
  responseBy?: number;
  responseAt?: string;
}
