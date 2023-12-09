package com.cho.ecommerce.domain.member.controller;

import com.cho.ecommerce.api.UserApi;
import com.cho.ecommerce.api.domain.RegisterResponseDTO;
import com.cho.ecommerce.domain.member.adapter.UserAdapter;
import java.util.HashMap;
import java.util.Map;
import javax.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class UserController implements UserApi {
    
    private final Logger log = LoggerFactory.getLogger(this.getClass().getSimpleName());
    private final UserAdapter userAdapter;
    private final AuthenticationManager authenticationManager;
    
    
    @Override
    public ResponseEntity<RegisterResponseDTO> registerRoleUser(@Valid com.cho.ecommerce.api.domain.RegisterRequestDTO registerRequestDTO) {
        try {
            userAdapter.saveRoleUser(registerRequestDTO);
            
            // Creating a response
            RegisterResponseDTO response = new RegisterResponseDTO();
            response.setMessage("Registration successful");
            
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (Exception e) {
            // Handle the exception, maybe return a 400 Bad Request or similar
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    
    @Override
    public ResponseEntity<com.cho.ecommerce.api.domain.LoginResponseDTO> loginUser(@Valid @RequestBody com.cho.ecommerce.api.domain.LoginRequestDTO loginDto) {
        Authentication authentication = authenticationManager
            .authenticate(new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
    
        com.cho.ecommerce.api.domain.LoginResponseDTO response = new com.cho.ecommerce.api.domain.LoginResponseDTO();
        response.setMessage("User login successfully!");
        
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    
    //spring security는 authentication success 이후 Redirect 해주는 GET 주소가 꼭 필요하다보다.
    @GetMapping("/login/success")
    public ResponseEntity onLoginSuccess() {
        log.info("로그인 성공");
        Map<String,Boolean> map = new HashMap<>();
        map.put("로그인 성공 여부", true);
        return new ResponseEntity(map, HttpStatus.OK);
    }
    
    //spring security는 authentication fail 이후 Redirect 해주는 GET 주소가 꼭 필요하다보다.
    @GetMapping("/login/fail")
    public ResponseEntity onLoginFail() {
        log.info("로그인 실패");
        Map<String,Boolean> map = new HashMap<>();
        map.put("로그인 성공 여부", false);
        return new ResponseEntity(map, HttpStatus.OK);
    }
    
    @Override
    public ResponseEntity<com.cho.ecommerce.api.domain.UserDetailsResponseDTO> getUserByUsername(@PathVariable String username) {
        com.cho.ecommerce.api.domain.UserDetailsResponseDTO userDetailsResponseDTOByUsername = userAdapter.findUserDetailsDTOByUsername(
            username);
        
        return new ResponseEntity<>(userDetailsResponseDTOByUsername, HttpStatus.OK);
    }

}
