package com.cho.ecommerce.domain.member.repository;

import com.cho.ecommerce.domain.member.entity.UserEntity;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    Optional<UserEntity> findByEmail(String email);
    
    Optional<UserEntity> findByUsername(String username);
}
