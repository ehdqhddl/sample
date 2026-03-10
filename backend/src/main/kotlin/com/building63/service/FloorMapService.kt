package com.building63.service

import com.building63.dto.FloorMapDto
import com.building63.dto.FloorMapRequest
import com.building63.dto.toDto
import com.building63.entity.FloorMap
import com.building63.repository.FloorMapRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime

@Service
class FloorMapService(private val floorMapRepository: FloorMapRepository) {

    fun getActiveFloorMaps(): List<FloorMapDto> =
        floorMapRepository.findByActiveTrueOrderByDisplayOrderAsc().map { it.toDto() }

    fun getAllFloorMaps(): List<FloorMapDto> =
        floorMapRepository.findAllByOrderByDisplayOrderAsc().map { it.toDto() }

    @Transactional
    fun create(request: FloorMapRequest): FloorMapDto {
        val floorMap = FloorMap(
            floorNumber = request.floorNumber,
            floorNameKo = request.floorNameKo,
            floorNameEn = request.floorNameEn,
            floorNameZh = request.floorNameZh,
            floorNameJa = request.floorNameJa,
            descriptionKo = request.descriptionKo,
            descriptionEn = request.descriptionEn,
            descriptionZh = request.descriptionZh,
            descriptionJa = request.descriptionJa,
            imageUrl = request.imageUrl,
            displayOrder = request.displayOrder,
            active = request.active
        )
        return floorMapRepository.save(floorMap).toDto()
    }

    @Transactional
    fun update(id: Long, request: FloorMapRequest): FloorMapDto {
        val floorMap = floorMapRepository.findById(id).orElseThrow { NoSuchElementException("FloorMap not found") }
        floorMap.floorNumber = request.floorNumber
        floorMap.floorNameKo = request.floorNameKo
        floorMap.floorNameEn = request.floorNameEn
        floorMap.floorNameZh = request.floorNameZh
        floorMap.floorNameJa = request.floorNameJa
        floorMap.descriptionKo = request.descriptionKo
        floorMap.descriptionEn = request.descriptionEn
        floorMap.descriptionZh = request.descriptionZh
        floorMap.descriptionJa = request.descriptionJa
        floorMap.imageUrl = request.imageUrl
        floorMap.displayOrder = request.displayOrder
        floorMap.active = request.active
        floorMap.updatedAt = LocalDateTime.now()
        return floorMapRepository.save(floorMap).toDto()
    }

    @Transactional
    fun delete(id: Long) = floorMapRepository.deleteById(id)
}
