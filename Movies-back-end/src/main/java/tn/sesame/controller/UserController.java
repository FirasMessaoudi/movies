package tn.sesame.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tn.sesame.model.User;
import tn.sesame.repository.MovieNoteRepository;
import tn.sesame.repository.UserRepository;

@RestController
@CrossOrigin(origins = "*" )
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private MovieNoteRepository movieNoteRepository;
    @GetMapping("/{username}")
    public User getUser(@PathVariable("username") String username){
        return userRepository.findByUsername(username);
    }

}
