package com.building63.entity

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "admin_user")
data class AdminUser(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(unique = true, nullable = false)
    val username: String,

    @Column(nullable = false)
    var password: String,

    @Column(nullable = false)
    val role: String = "ADMIN",

    @Column(nullable = false)
    val createdAt: LocalDateTime = LocalDateTime.now()
)
