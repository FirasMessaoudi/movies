package tn.sesame.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.sesame.model.MovieFavorit;
import tn.sesame.model.MovieUserID;

import java.util.List;

public interface MovieFavoritRepository extends JpaRepository<MovieFavorit, MovieUserID> {
    @Query("select w from MovieFavorit w where w.movieUserID.email=:email")
    List<MovieFavorit> getFavoritByUser(@Param("email") String email);
}
