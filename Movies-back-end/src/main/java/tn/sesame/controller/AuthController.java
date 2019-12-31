package tn.sesame.controller;

import io.swagger.annotations.*;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.sesame.dto.JwtResponse;
import tn.sesame.dto.UserLogin;
import tn.sesame.model.User;
import tn.sesame.service.UserService;
@EnableAutoConfiguration
@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*" )
@Api(tags = "users")
public class AuthController {
    @Autowired
    private UserService userService;
    @Autowired
    private ModelMapper modelMapper;

    @PostMapping("/signin")
    @ApiOperation(value = "${AuthController.signin}")
    @ApiResponses(value = {//
            @ApiResponse(code = 400, message = "Something went wrong"), //
            @ApiResponse(code = 422, message = "Invalid username/password supplied")})
    public ResponseEntity<?> login(@RequestBody UserLogin user) {
        return userService.signin(user.getUsername(), user.getPassword());
    }

    @PostMapping("/signup")
    @ApiOperation(value = "${AuthController.signup}")
    @ApiResponses(value = {//
            @ApiResponse(code = 400, message = "Something went wrong"), //
            @ApiResponse(code = 403, message = "Access denied"), //
            @ApiResponse(code = 422, message = "Username is already in use"), //
            @ApiResponse(code = 500, message = "Expired or invalid JWT token")})
    public JwtResponse signup(@RequestBody User user) {
        return userService.signup(user);
    }

}
