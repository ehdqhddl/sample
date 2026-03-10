package com.building63.entity

import jakarta.persistence.*
import java.time.LocalDateTime

enum class NewsType { NOTICE, NEWS }

@Entity
@Table(name = "news")
data class News(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(nullable = false) var titleKo: String,
    @Column(nullable = false) var titleEn: String,
    @Column(nullable = false) var titleZh: String,
    @Column(nullable = false) var titleJa: String,

    @Column(columnDefinition = "TEXT") var contentKo: String = "",
    @Column(columnDefinition = "TEXT") var contentEn: String = "",
    @Column(columnDefinition = "TEXT") var contentZh: String = "",
    @Column(columnDefinition = "TEXT") var contentJa: String = "",

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    var newsType: NewsType = NewsType.NEWS,

    var published: Boolean = true,

    @Column(nullable = false)
    val createdAt: LocalDateTime = LocalDateTime.now(),

    var updatedAt: LocalDateTime = LocalDateTime.now()
)
