package com.building63.entity

import jakarta.persistence.*
import java.time.LocalDateTime

enum class LinkType { OBSERVATORY, POMPIDOU, BUFFET, RESTAURANT }

@Entity
@Table(name = "external_link")
data class ExternalLink(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    var linkType: LinkType,

    @Column(nullable = false) var url: String,

    var labelKo: String = "",
    var labelEn: String = "",
    var labelZh: String = "",
    var labelJa: String = "",

    var active: Boolean = true,
    var displayOrder: Int = 0,

    val createdAt: LocalDateTime = LocalDateTime.now(),
    var updatedAt: LocalDateTime = LocalDateTime.now()
)
