export type Lang = 'ko' | 'en' | 'zh' | 'ja'

export type NewsType = 'NOTICE' | 'NEWS'
export type StoreZone = 'FNB' | 'RETAIL' | 'AMENITY' | 'CULTURE' | 'SERVICE'
export type LinkType = 'OBSERVATORY' | 'POMPIDOU' | 'BUFFET' | 'RESTAURANT'

export interface News {
  id: number
  titleKo: string
  titleEn: string
  titleZh: string
  titleJa: string
  contentKo: string
  contentEn: string
  contentZh: string
  contentJa: string
  newsType: NewsType
  published: boolean
  createdAt: string
}

export interface FloorMap {
  id: number
  floorNumber: string
  floorNameKo: string
  floorNameEn: string
  floorNameZh: string
  floorNameJa: string
  descriptionKo: string
  descriptionEn: string
  descriptionZh: string
  descriptionJa: string
  imageUrl: string | null
  displayOrder: number
  active: boolean
}

export interface Store {
  id: number
  nameKo: string
  nameEn: string
  nameZh: string
  nameJa: string
  floor: string
  zone: StoreZone
  descriptionKo: string
  descriptionEn: string
  descriptionZh: string
  descriptionJa: string
  phone: string | null
  hours: string | null
  imageUrl: string | null
  displayOrder: number
  active: boolean
}

export interface ExternalLink {
  id: number
  linkType: LinkType
  url: string
  labelKo: string
  labelEn: string
  labelZh: string
  labelJa: string
  active: boolean
  displayOrder: number
}

export interface ApiResponse<T> {
  success: boolean
  data: T
  message: string
}
