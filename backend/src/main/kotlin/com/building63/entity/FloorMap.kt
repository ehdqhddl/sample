package com.building63.entity

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "floor_map")
data class FloorMap(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(nullable = false) var floorNumber: String,
    var floorNameKo: String = "",
    var floorNameEn: String = "",
    var floorNameZh: String = "",
    var floorNameJa: String = "",

    @Column(columnDefinition = "TEXT") var descriptionKo: String = "",
    @Column(columnDefinition = "TEXT") var descriptionEn: String = "",
    @Column(columnDefinition = "TEXT") var descriptionZh: String = "",
    @Column(columnDefinition = "TEXT") var descriptionJa: String = "",

    var imageUrl: String? = null,
    var displayOrder: Int = 0,
    var active: Boolean = true,

    val createdAt: LocalDateTime = LocalDateTime.now(),
    var updatedAt: LocalDateTime = LocalDateTime.now()
)
