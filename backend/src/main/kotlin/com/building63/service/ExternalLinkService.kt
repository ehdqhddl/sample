package com.building63.service

import com.building63.dto.ExternalLinkDto
import com.building63.dto.ExternalLinkRequest
import com.building63.dto.toDto
import com.building63.entity.ExternalLink
import com.building63.entity.LinkType
import com.building63.repository.ExternalLinkRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime

@Service
class ExternalLinkService(private val externalLinkRepository: ExternalLinkRepository) {

    fun getActiveLinks(): List<ExternalLinkDto> =
        externalLinkRepository.findByActiveTrueOrderByDisplayOrderAsc().map { it.toDto() }

    fun getAllLinks(): List<ExternalLinkDto> =
        externalLinkRepository.findAllByOrderByDisplayOrderAsc().map { it.toDto() }

    fun getByType(type: LinkType): ExternalLinkDto? =
        externalLinkRepository.findByLinkTypeAndActiveTrue(type)?.toDto()

    @Transactional
    fun create(request: ExternalLinkRequest): ExternalLinkDto {
        val link = ExternalLink(
            linkType = request.linkType,
            url = request.url,
            labelKo = request.labelKo,
            labelEn = request.labelEn,
            labelZh = request.labelZh,
            labelJa = request.labelJa,
            active = request.active,
            displayOrder = request.displayOrder
        )
        return externalLinkRepository.save(link).toDto()
    }

    @Transactional
    fun update(id: Long, request: ExternalLinkRequest): ExternalLinkDto {
        val link = externalLinkRepository.findById(id).orElseThrow { NoSuchElementException("Link not found") }
        link.linkType = request.linkType
        link.url = request.url
        link.labelKo = request.labelKo
        link.labelEn = request.labelEn
        link.labelZh = request.labelZh
        link.labelJa = request.labelJa
        link.active = request.active
        link.displayOrder = request.displayOrder
        link.updatedAt = LocalDateTime.now()
        return externalLinkRepository.save(link).toDto()
    }

    @Transactional
    fun delete(id: Long) = externalLinkRepository.deleteById(id)
}
