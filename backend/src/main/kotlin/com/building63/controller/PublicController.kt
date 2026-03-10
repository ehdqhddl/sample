package com.building63.controller

import com.building63.dto.ApiResponse
import com.building63.entity.LinkType
import com.building63.entity.NewsType
import com.building63.entity.StoreZone
import com.building63.service.*
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/public")
class PublicController(
    private val newsService: NewsService,
    private val floorMapService: FloorMapService,
    private val storeService: StoreService,
    private val externalLinkService: ExternalLinkService
) {

    // News
    @GetMapping("/news")
    fun getNews(@RequestParam(required = false) type: NewsType?): ResponseEntity<ApiResponse<Any>> {
        val news = if (type != null) newsService.getPublishedByType(type) else newsService.getPublishedNews()
        return ResponseEntity.ok(ApiResponse(true, news))
    }

    @GetMapping("/news/{id}")
    fun getNewsById(@PathVariable id: Long): ResponseEntity<ApiResponse<Any>> {
        return try {
            ResponseEntity.ok(ApiResponse(true, newsService.getById(id)))
        } catch (e: NoSuchElementException) {
            ResponseEntity.notFound().build()
        }
    }

    // Floor Maps
    @GetMapping("/floor-maps")
    fun getFloorMaps(): ResponseEntity<ApiResponse<Any>> =
        ResponseEntity.ok(ApiResponse(true, floorMapService.getActiveFloorMaps()))

    // Stores
    @GetMapping("/stores")
    fun getStores(@RequestParam(required = false) zone: StoreZone?): ResponseEntity<ApiResponse<Any>> {
        val stores = if (zone != null) storeService.getByZone(zone) else storeService.getActiveStores()
        return ResponseEntity.ok(ApiResponse(true, stores))
    }

    // External Links
    @GetMapping("/links")
    fun getLinks(): ResponseEntity<ApiResponse<Any>> =
        ResponseEntity.ok(ApiResponse(true, externalLinkService.getActiveLinks()))

    @GetMapping("/links/{type}")
    fun getLinkByType(@PathVariable type: LinkType): ResponseEntity<ApiResponse<Any>> {
        val link = externalLinkService.getByType(type)
        return if (link != null) ResponseEntity.ok(ApiResponse(true, link))
        else ResponseEntity.notFound().build()
    }
}
