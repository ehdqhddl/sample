import client from './client'
import type { News, FloorMap, Store, ExternalLink, ApiResponse, NewsType, StoreZone, LinkType } from '../types'

// Public API
export const publicApi = {
  getNews: (type?: NewsType) =>
    client.get<ApiResponse<News[]>>('/public/news', { params: type ? { type } : undefined }),
  getNewsById: (id: number) =>
    client.get<ApiResponse<News>>(`/public/news/${id}`),
  getFloorMaps: () =>
    client.get<ApiResponse<FloorMap[]>>('/public/floor-maps'),
  getStores: (zone?: StoreZone) =>
    client.get<ApiResponse<Store[]>>('/public/stores', { params: zone ? { zone } : undefined }),
  getLinks: () =>
    client.get<ApiResponse<ExternalLink[]>>('/public/links'),
  getLinkByType: (type: LinkType) =>
    client.get<ApiResponse<ExternalLink>>(`/public/links/${type}`),
}

// Admin API
export const adminApi = {
  login: (username: string, password: string) =>
    client.post<ApiResponse<{ token: string; username: string }>>('/auth/login', { username, password }),

  // News
  getAllNews: () => client.get<ApiResponse<News[]>>('/admin/news'),
  createNews: (data: Omit<News, 'id' | 'createdAt'>) => client.post<ApiResponse<News>>('/admin/news', data),
  updateNews: (id: number, data: Omit<News, 'id' | 'createdAt'>) => client.put<ApiResponse<News>>(`/admin/news/${id}`, data),
  deleteNews: (id: number) => client.delete(`/admin/news/${id}`),

  // Floor Maps
  getAllFloorMaps: () => client.get<ApiResponse<FloorMap[]>>('/admin/floor-maps'),
  createFloorMap: (data: Omit<FloorMap, 'id'>) => client.post<ApiResponse<FloorMap>>('/admin/floor-maps', data),
  updateFloorMap: (id: number, data: Omit<FloorMap, 'id'>) => client.put<ApiResponse<FloorMap>>(`/admin/floor-maps/${id}`, data),
  deleteFloorMap: (id: number) => client.delete(`/admin/floor-maps/${id}`),

  // Stores
  getAllStores: () => client.get<ApiResponse<Store[]>>('/admin/stores'),
  createStore: (data: Omit<Store, 'id'>) => client.post<ApiResponse<Store>>('/admin/stores', data),
  updateStore: (id: number, data: Omit<Store, 'id'>) => client.put<ApiResponse<Store>>(`/admin/stores/${id}`, data),
  deleteStore: (id: number) => client.delete(`/admin/stores/${id}`),

  // Links
  getAllLinks: () => client.get<ApiResponse<ExternalLink[]>>('/admin/links'),
  createLink: (data: Omit<ExternalLink, 'id'>) => client.post<ApiResponse<ExternalLink>>('/admin/links', data),
  updateLink: (id: number, data: Omit<ExternalLink, 'id'>) => client.put<ApiResponse<ExternalLink>>(`/admin/links/${id}`, data),
  deleteLink: (id: number) => client.delete(`/admin/links/${id}`),
}
