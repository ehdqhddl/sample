package com.building63.dto

import com.building63.entity.*
import java.time.LocalDateTime

// Auth
data class LoginRequest(val username: String, val password: String)
data class LoginResponse(val token: String, val username: String)

// News
data class NewsDto(
    val id: Long,
    val titleKo: String,
    val titleEn: String,
    val titleZh: String,
    val titleJa: String,
    val contentKo: String,
    val contentEn: String,
    val contentZh: String,
    val contentJa: String,
    val newsType: NewsType,
    val published: Boolean,
    val createdAt: LocalDateTime
)

data class NewsRequest(
    val titleKo: String,
    val titleEn: String,
    val titleZh: String,
    val titleJa: String,
    val contentKo: String = "",
    val contentEn: String = "",
    val contentZh: String = "",
    val contentJa: String = "",
    val newsType: NewsType = NewsType.NEWS,
    val published: Boolean = true
)

fun News.toDto() = NewsDto(id, titleKo, titleEn, titleZh, titleJa, contentKo, contentEn, contentZh, contentJa, newsType, published, createdAt)

// FloorMap
data class FloorMapDto(
    val id: Long,
    val floorNumber: String,
    val floorNameKo: String,
    val floorNameEn: String,
    val floorNameZh: String,
    val floorNameJa: String,
    val descriptionKo: String,
    val descriptionEn: String,
    val descriptionZh: String,
    val descriptionJa: String,
    val imageUrl: String?,
    val displayOrder: Int,
    val active: Boolean
)

data class FloorMapRequest(
    val floorNumber: String,
    val floorNameKo: String = "",
    val floorNameEn: String = "",
    val floorNameZh: String = "",
    val floorNameJa: String = "",
    val descriptionKo: String = "",
    val descriptionEn: String = "",
    val descriptionZh: String = "",
    val descriptionJa: String = "",
    val imageUrl: String? = null,
    val displayOrder: Int = 0,
    val active: Boolean = true
)

fun FloorMap.toDto() = FloorMapDto(id, floorNumber, floorNameKo, floorNameEn, floorNameZh, floorNameJa, descriptionKo, descriptionEn, descriptionZh, descriptionJa, imageUrl, displayOrder, active)

// Store
data class StoreDto(
    val id: Long,
    val nameKo: String,
    val nameEn: String,
    val nameZh: String,
    val nameJa: String,
    val floor: String,
    val zone: StoreZone,
    val descriptionKo: String,
    val descriptionEn: String,
    val descriptionZh: String,
    val descriptionJa: String,
    val phone: String?,
    val hours: String?,
    val imageUrl: String?,
    val displayOrder: Int,
    val active: Boolean
)

data class StoreRequest(
    val nameKo: String,
    val nameEn: String = "",
    val nameZh: String = "",
    val nameJa: String = "",
    val floor: String = "",
    val zone: StoreZone = StoreZone.RETAIL,
    val descriptionKo: String = "",
    val descriptionEn: String = "",
    val descriptionZh: String = "",
    val descriptionJa: String = "",
    val phone: String? = null,
    val hours: String? = null,
    val imageUrl: String? = null,
    val displayOrder: Int = 0,
    val active: Boolean = true
)

fun Store.toDto() = StoreDto(id, nameKo, nameEn, nameZh, nameJa, floor, zone, descriptionKo, descriptionEn, descriptionZh, descriptionJa, phone, hours, imageUrl, displayOrder, active)

// ExternalLink
data class ExternalLinkDto(
    val id: Long,
    val linkType: LinkType,
    val url: String,
    val labelKo: String,
    val labelEn: String,
    val labelZh: String,
    val labelJa: String,
    val active: Boolean,
    val displayOrder: Int
)

data class ExternalLinkRequest(
    val linkType: LinkType,
    val url: String,
    val labelKo: String = "",
    val labelEn: String = "",
    val labelZh: String = "",
    val labelJa: String = "",
    val active: Boolean = true,
    val displayOrder: Int = 0
)

fun ExternalLink.toDto() = ExternalLinkDto(id, linkType, url, labelKo, labelEn, labelZh, labelJa, active, displayOrder)

// Common
data class ApiResponse<T>(val success: Boolean, val data: T? = null, val message: String = "")
