package tn.sesame.controller;


import org.springframework.web.bind.annotation.*;
import tn.sesame.model.MovieFavorit;
import tn.sesame.model.MovieUserID;
import tn.sesame.service.MovieFavoritService;

import java.util.List;

@RestController
@CrossOrigin(origins = "*" )
@RequestMapping("/favoris")
public class FavorisConroller {
    private final MovieFavoritService movieFavoritService;

    public FavorisConroller(MovieFavoritService movieFavoritService) {
        this.movieFavoritService = movieFavoritService;
    }
    @PostMapping("/addFavorit")
    public MovieFavorit addRemoveFavorit(@RequestBody  MovieFavorit movieFavorit){
        return movieFavoritService.addRemoveFavorit(movieFavorit);
    }
    @PostMapping("/existInFavorit")
    public Boolean existInFavorit(@RequestBody  MovieUserID movieUserID){
        return movieFavoritService.existInFavorit(movieUserID);
    }
    @GetMapping("/getFavoris/{email}")
    public List<MovieFavorit> findByUser(@PathVariable  String email){
        return movieFavoritService.findByUser(email);
    }
}
