package com.building63.service

import com.building63.dto.NewsDto
import com.building63.dto.NewsRequest
import com.building63.dto.toDto
import com.building63.entity.News
import com.building63.entity.NewsType
import com.building63.repository.NewsRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime

@Service
class NewsService(private val newsRepository: NewsRepository) {

    fun getPublishedNews(): List<NewsDto> =
        newsRepository.findByPublishedTrueOrderByCreatedAtDesc().map { it.toDto() }

    fun getPublishedByType(type: NewsType): List<NewsDto> =
        newsRepository.findByNewsTypeAndPublishedTrueOrderByCreatedAtDesc(type).map { it.toDto() }

    fun getAllNews(): List<NewsDto> =
        newsRepository.findAllByOrderByCreatedAtDesc().map { it.toDto() }

    fun getById(id: Long): NewsDto =
        newsRepository.findById(id).orElseThrow { NoSuchElementException("News not found") }.toDto()

    @Transactional
    fun create(request: NewsRequest): NewsDto {
        val news = News(
            titleKo = request.titleKo,
            titleEn = request.titleEn,
            titleZh = request.titleZh,
            titleJa = request.titleJa,
            contentKo = request.contentKo,
            contentEn = request.contentEn,
            contentZh = request.contentZh,
            contentJa = request.contentJa,
            newsType = request.newsType,
            published = request.published
        )
        return newsRepository.save(news).toDto()
    }

    @Transactional
    fun update(id: Long, request: NewsRequest): NewsDto {
        val news = newsRepository.findById(id).orElseThrow { NoSuchElementException("News not found") }
        news.titleKo = request.titleKo
        news.titleEn = request.titleEn
        news.titleZh = request.titleZh
        news.titleJa = request.titleJa
        news.contentKo = request.contentKo
        news.contentEn = request.contentEn
        news.contentZh = request.contentZh
        news.contentJa = request.contentJa
        news.newsType = request.newsType
        news.published = request.published
        news.updatedAt = LocalDateTime.now()
        return newsRepository.save(news).toDto()
    }

    @Transactional
    fun delete(id: Long) = newsRepository.deleteById(id)
}
