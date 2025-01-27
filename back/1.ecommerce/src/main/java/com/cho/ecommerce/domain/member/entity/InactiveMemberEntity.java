package com.cho.ecommerce.domain.member.entity;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "INACTIVE_MEMBER")
@Setter
@Getter
@Builder
public class InactiveMemberEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "inactive_member_seq")
//    @SequenceGenerator(
//        name = "inactive_member_seq",
//        sequenceName = "INACTIVE_MEMBER_SEQ",
//        allocationSize = 1000
//    )
    @Column(name = "MEMBER_ID")
    private Long memberId;
    
    @Column(name = "USER_ID", nullable = false, length = 30)
    private String username;
    
    @Column(name = "NAME", nullable = false, length = 100)
    private String name;
    @Column(name = "EMAIL", nullable = false, length = 100)
    private String email;
    
    @Column(name = "PASSWORD", nullable = false, length = 255)
    private String password;
    
    @Column(name = "ROLE", nullable = false, length = 20)
    private String role;
    
    @Column(name = "FAILED_ATTEMPT", nullable = false)
    private Integer failedAttempt;
    
    @Column(name = "ENABLED", nullable = false)
    private Boolean enabled;
    
    @Column(name = "CREATED_AT", nullable = false)
    private LocalDateTime createdAt;
    
    @Column(name = "UPDATED_AT", nullable = false)
    private LocalDateTime updatedAt;

//    @Column(name = "AUTHORITY")
//    private String authority;
    
    @Column(name = "STREET", length = 255)
    private String street;
    
    @Column(name = "CITY", length = 100)
    private String city;
    
    @Column(name = "STATE", length = 100)
    private String state;
    
    @Column(name = "COUNTRY", length = 100)
    private String country;
    
    @Column(name = "ZIPCODE", length = 20)
    private String zipCode;
    
}