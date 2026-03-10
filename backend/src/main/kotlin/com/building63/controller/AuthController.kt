package com.building63.controller

import com.building63.dto.ApiResponse
import com.building63.dto.LoginRequest
import com.building63.service.AuthService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/auth")
class AuthController(private val authService: AuthService) {

    @PostMapping("/login")
    fun login(@RequestBody request: LoginRequest): ResponseEntity<ApiResponse<Any>> {
        return try {
            val response = authService.login(request)
            ResponseEntity.ok(ApiResponse(true, response))
        } catch (e: IllegalArgumentException) {
            ResponseEntity.status(401).body(ApiResponse(false, message = e.message ?: "Unauthorized"))
        }
    }
}
