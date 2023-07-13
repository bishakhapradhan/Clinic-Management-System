package com.example.demo.security;


import com.example.demo.model.Role;
import com.example.demo.model.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

public class JwtUtil {

    public
     static  String getJWTToken(User user) {
        String secretKey = "mySecretKey";


       List<String> authorities = user.getRoles()
               .stream()
               .map(Role::getName)
               .collect(Collectors.toList());

        String token = Jwts
                .builder()
                .setId(String.valueOf(user.getId()))
                .setSubject(user.getFullName())
                .claim("authorities", authorities)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 60000000))
                .signWith(SignatureAlgorithm.HS512,
                        secretKey.getBytes()).compact();

        return "Bearer " + token;
    }
}
