package com.building63.entity

import jakarta.persistence.*
import java.time.LocalDateTime

enum class StoreZone { FNB, RETAIL, AMENITY, CULTURE, SERVICE }

@Entity
@Table(name = "store")
data class Store(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    var nameKo: String,
    var nameEn: String = "",
    var nameZh: String = "",
    var nameJa: String = "",

    var floor: String = "",

    @Enumerated(EnumType.STRING)
    var zone: StoreZone = StoreZone.RETAIL,

    @Column(columnDefinition = "TEXT") var descriptionKo: String = "",
    @Column(columnDefinition = "TEXT") var descriptionEn: String = "",
    @Column(columnDefinition = "TEXT") var descriptionZh: String = "",
    @Column(columnDefinition = "TEXT") var descriptionJa: String = "",

    var phone: String? = null,
    var hours: String? = null,
    var imageUrl: String? = null,
    var displayOrder: Int = 0,
    var active: Boolean = true,

    val createdAt: LocalDateTime = LocalDateTime.now(),
    var updatedAt: LocalDateTime = LocalDateTime.now()
)
