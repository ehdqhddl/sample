package com.building63.config

import com.building63.entity.AdminUser
import com.building63.repository.AdminUserRepository
import org.springframework.boot.ApplicationArguments
import org.springframework.boot.ApplicationRunner
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Component

@Component
class DataInitializer(
    private val adminUserRepository: AdminUserRepository,
    private val passwordEncoder: PasswordEncoder
) : ApplicationRunner {

    override fun run(args: ApplicationArguments) {
        if (adminUserRepository.findByUsername("admin") == null) {
            adminUserRepository.save(
                AdminUser(
                    username = "admin",
                    password = passwordEncoder.encode("admin1234"),
                    role = "ADMIN"
                )
            )
        }
    }
}
