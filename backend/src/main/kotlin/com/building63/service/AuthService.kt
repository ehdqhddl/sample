package com.building63.service

import com.building63.config.JwtUtil
import com.building63.dto.LoginRequest
import com.building63.dto.LoginResponse
import com.building63.repository.AdminUserRepository
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service

@Service
class AuthService(
    private val adminUserRepository: AdminUserRepository,
    private val passwordEncoder: PasswordEncoder,
    private val jwtUtil: JwtUtil
) {
    fun login(request: LoginRequest): LoginResponse {
        val admin = adminUserRepository.findByUsername(request.username)
            ?: throw IllegalArgumentException("Invalid credentials")

        if (!passwordEncoder.matches(request.password, admin.password)) {
            throw IllegalArgumentException("Invalid credentials")
        }

        val token = jwtUtil.generateToken(admin.username)
        return LoginResponse(token, admin.username)
    }
}
