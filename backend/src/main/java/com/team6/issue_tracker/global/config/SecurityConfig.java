package com.team6.issue_tracker.global.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
        http
                .authorizeRequests()
//                .antMatchers("/home").permitAll()
                .anyRequest().permitAll();
    }


//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.authorizeRequests()
//                    .antMatchers("/").authenticated()
//                    .antMatchers("/user/**").permitAll()
//                .and()
//                    .formLogin()
//                    .loginPage("/loginForm")
//                    .defaultSuccessUrl("/")
//                .and()
//                    .logout()
//                    .logoutSuccessUrl("/")
//                .and()
//                    .oauth2Login()
//                    .userInfoEndpoint()
//                    .userService(customOAuth2UserService)
//                .and()
//                    .defaultSuccessUrl("/");
//    }
}
