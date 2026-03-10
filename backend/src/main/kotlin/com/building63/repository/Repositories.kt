package com.building63.repository

import com.building63.entity.*
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface AdminUserRepository : JpaRepository<AdminUser, Long> {
    fun findByUsername(username: String): AdminUser?
}

@Repository
interface NewsRepository : JpaRepository<News, Long> {
    fun findByPublishedTrueOrderByCreatedAtDesc(): List<News>
    fun findAllByOrderByCreatedAtDesc(): List<News>
    fun findByNewsTypeAndPublishedTrueOrderByCreatedAtDesc(newsType: NewsType): List<News>
}

@Repository
interface FloorMapRepository : JpaRepository<FloorMap, Long> {
    fun findByActiveTrueOrderByDisplayOrderAsc(): List<FloorMap>
    fun findAllByOrderByDisplayOrderAsc(): List<FloorMap>
}

@Repository
interface StoreRepository : JpaRepository<Store, Long> {
    fun findByActiveTrueOrderByDisplayOrderAsc(): List<Store>
    fun findAllByOrderByDisplayOrderAsc(): List<Store>
    fun findByZoneAndActiveTrueOrderByDisplayOrderAsc(zone: StoreZone): List<Store>
}

@Repository
interface ExternalLinkRepository : JpaRepository<ExternalLink, Long> {
    fun findByActiveTrueOrderByDisplayOrderAsc(): List<ExternalLink>
    fun findByLinkTypeAndActiveTrue(linkType: LinkType): ExternalLink?
    fun findAllByOrderByDisplayOrderAsc(): List<ExternalLink>
}
