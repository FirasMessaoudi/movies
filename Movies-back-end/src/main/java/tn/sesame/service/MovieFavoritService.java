package tn.sesame.service;

import org.springframework.stereotype.Service;
import tn.sesame.model.MovieFavorit;
import tn.sesame.model.MovieUserID;
import tn.sesame.repository.MovieFavoritRepository;

import java.util.List;
import java.util.Optional;

@Service
public class MovieFavoritService {
    private final MovieFavoritRepository movieFavoritRepository;

    public MovieFavoritService(MovieFavoritRepository movieFavoritRepository) {
        this.movieFavoritRepository = movieFavoritRepository;
    }
    public MovieFavorit addRemoveFavorit(MovieFavorit movieFavorit){
        Optional<MovieFavorit> movieFavorit1 = movieFavoritRepository.findById(movieFavorit.getMovieUserID());
        if(movieFavorit1.isPresent()){
            movieFavoritRepository.deleteById(movieFavorit.getMovieUserID());
            return movieFavorit;
        }else{
            return movieFavoritRepository.save(movieFavorit);
        }
    }
    public Boolean existInFavorit(MovieUserID movieUserID){
        Optional<MovieFavorit> movieFavorit = movieFavoritRepository.findById(movieUserID);
        if (movieFavorit.isPresent())
            return true;
        else
            return false;

    }
    public List<MovieFavorit> findByUser(String email){
          return movieFavoritRepository.getFavoritByUser(email);
    }
}
