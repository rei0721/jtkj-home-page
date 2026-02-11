import axios, { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import type { ApiResponse } from '@/types/api';

// ==================== 配置 ====================

const request = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

// ==================== 请求拦截器 ====================

request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

// ==================== 响应拦截器 ====================

request.interceptors.response.use(
  (response) => {
    const res = response.data as ApiResponse;

    if (res.success || res.code === 0) {
      return response;
    }

    // 业务错误：弹出提示（可替换为 toast 组件）
    console.error(`[API Error] ${res.msg}`);

    // 特定状态码处理（如 401 未授权）
    if (res.code === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }

    return Promise.reject(new Error(res.msg || '请求失败'));
  },
  (error: AxiosError) => {
    // HTTP 层错误
    const status = error.response?.status;
    const messages: Record<number, string> = {
      400: '请求参数错误',
      401: '未授权，请重新登录',
      403: '拒绝访问',
      404: '请求资源不存在',
      500: '服务器内部错误',
      502: '网关错误',
      503: '服务不可用',
    };

    const msg = (status && messages[status]) || error.message || '网络异常';
    console.error(`[HTTP Error] ${status ?? 'unknown'}: ${msg}`);

    if (status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }

    return Promise.reject(new Error(msg));
  },
);

// ==================== 类型安全的快捷方法 ====================

/**
 * GET 请求
 * @example const users = await get<User[]>('/users', { params: { page: 1 } })
 */
export async function get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  const res = await request.get<ApiResponse<T>>(url, config);
  return res.data.data;
}

/**
 * POST 请求
 * @example const user = await post<User>('/users', { name: '张三' })
 */
export async function post<T>(
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig,
): Promise<T> {
  const res = await request.post<ApiResponse<T>>(url, data, config);
  return res.data.data;
}

/**
 * PUT 请求
 */
export async function put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<T> {
  const res = await request.put<ApiResponse<T>>(url, data, config);
  return res.data.data;
}

/**
 * DELETE 请求
 */
export async function del<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  const res = await request.delete<ApiResponse<T>>(url, config);
  return res.data.data;
}

export default request;
