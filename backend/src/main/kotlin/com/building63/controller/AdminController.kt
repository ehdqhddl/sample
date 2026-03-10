package com.building63.controller

import com.building63.dto.*
import com.building63.entity.LinkType
import com.building63.entity.StoreZone
import com.building63.service.*
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/admin")
class AdminController(
    private val newsService: NewsService,
    private val floorMapService: FloorMapService,
    private val storeService: StoreService,
    private val externalLinkService: ExternalLinkService
) {

    // ===== NEWS =====
    @GetMapping("/news")
    fun getAllNews() = ResponseEntity.ok(ApiResponse(true, newsService.getAllNews()))

    @PostMapping("/news")
    fun createNews(@RequestBody request: NewsRequest) =
        ResponseEntity.ok(ApiResponse(true, newsService.create(request)))

    @PutMapping("/news/{id}")
    fun updateNews(@PathVariable id: Long, @RequestBody request: NewsRequest) =
        ResponseEntity.ok(ApiResponse(true, newsService.update(id, request)))

    @DeleteMapping("/news/{id}")
    fun deleteNews(@PathVariable id: Long): ResponseEntity<ApiResponse<Unit>> {
        newsService.delete(id)
        return ResponseEntity.ok(ApiResponse(true, message = "Deleted"))
    }

    // ===== FLOOR MAPS =====
    @GetMapping("/floor-maps")
    fun getAllFloorMaps() = ResponseEntity.ok(ApiResponse(true, floorMapService.getAllFloorMaps()))

    @PostMapping("/floor-maps")
    fun createFloorMap(@RequestBody request: FloorMapRequest) =
        ResponseEntity.ok(ApiResponse(true, floorMapService.create(request)))

    @PutMapping("/floor-maps/{id}")
    fun updateFloorMap(@PathVariable id: Long, @RequestBody request: FloorMapRequest) =
        ResponseEntity.ok(ApiResponse(true, floorMapService.update(id, request)))

    @DeleteMapping("/floor-maps/{id}")
    fun deleteFloorMap(@PathVariable id: Long): ResponseEntity<ApiResponse<Unit>> {
        floorMapService.delete(id)
        return ResponseEntity.ok(ApiResponse(true, message = "Deleted"))
    }

    // ===== STORES =====
    @GetMapping("/stores")
    fun getAllStores() = ResponseEntity.ok(ApiResponse(true, storeService.getAllStores()))

    @PostMapping("/stores")
    fun createStore(@RequestBody request: StoreRequest) =
        ResponseEntity.ok(ApiResponse(true, storeService.create(request)))

    @PutMapping("/stores/{id}")
    fun updateStore(@PathVariable id: Long, @RequestBody request: StoreRequest) =
        ResponseEntity.ok(ApiResponse(true, storeService.update(id, request)))

    @DeleteMapping("/stores/{id}")
    fun deleteStore(@PathVariable id: Long): ResponseEntity<ApiResponse<Unit>> {
        storeService.delete(id)
        return ResponseEntity.ok(ApiResponse(true, message = "Deleted"))
    }

    // ===== EXTERNAL LINKS =====
    @GetMapping("/links")
    fun getAllLinks() = ResponseEntity.ok(ApiResponse(true, externalLinkService.getAllLinks()))

    @PostMapping("/links")
    fun createLink(@RequestBody request: ExternalLinkRequest) =
        ResponseEntity.ok(ApiResponse(true, externalLinkService.create(request)))

    @PutMapping("/links/{id}")
    fun updateLink(@PathVariable id: Long, @RequestBody request: ExternalLinkRequest) =
        ResponseEntity.ok(ApiResponse(true, externalLinkService.update(id, request)))

    @DeleteMapping("/links/{id}")
    fun deleteLink(@PathVariable id: Long): ResponseEntity<ApiResponse<Unit>> {
        externalLinkService.delete(id)
        return ResponseEntity.ok(ApiResponse(true, message = "Deleted"))
    }
}
