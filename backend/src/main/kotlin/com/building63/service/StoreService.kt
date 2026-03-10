package com.building63.service

import com.building63.dto.StoreDto
import com.building63.dto.StoreRequest
import com.building63.dto.toDto
import com.building63.entity.Store
import com.building63.entity.StoreZone
import com.building63.repository.StoreRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime

@Service
class StoreService(private val storeRepository: StoreRepository) {

    fun getActiveStores(): List<StoreDto> =
        storeRepository.findByActiveTrueOrderByDisplayOrderAsc().map { it.toDto() }

    fun getAllStores(): List<StoreDto> =
        storeRepository.findAllByOrderByDisplayOrderAsc().map { it.toDto() }

    fun getByZone(zone: StoreZone): List<StoreDto> =
        storeRepository.findByZoneAndActiveTrueOrderByDisplayOrderAsc(zone).map { it.toDto() }

    @Transactional
    fun create(request: StoreRequest): StoreDto {
        val store = Store(
            nameKo = request.nameKo,
            nameEn = request.nameEn,
            nameZh = request.nameZh,
            nameJa = request.nameJa,
            floor = request.floor,
            zone = request.zone,
            descriptionKo = request.descriptionKo,
            descriptionEn = request.descriptionEn,
            descriptionZh = request.descriptionZh,
            descriptionJa = request.descriptionJa,
            phone = request.phone,
            hours = request.hours,
            imageUrl = request.imageUrl,
            displayOrder = request.displayOrder,
            active = request.active
        )
        return storeRepository.save(store).toDto()
    }

    @Transactional
    fun update(id: Long, request: StoreRequest): StoreDto {
        val store = storeRepository.findById(id).orElseThrow { NoSuchElementException("Store not found") }
        store.nameKo = request.nameKo
        store.nameEn = request.nameEn
        store.nameZh = request.nameZh
        store.nameJa = request.nameJa
        store.floor = request.floor
        store.zone = request.zone
        store.descriptionKo = request.descriptionKo
        store.descriptionEn = request.descriptionEn
        store.descriptionZh = request.descriptionZh
        store.descriptionJa = request.descriptionJa
        store.phone = request.phone
        store.hours = request.hours
        store.imageUrl = request.imageUrl
        store.displayOrder = request.displayOrder
        store.active = request.active
        store.updatedAt = LocalDateTime.now()
        return storeRepository.save(store).toDto()
    }

    @Transactional
    fun delete(id: Long) = storeRepository.deleteById(id)
}
