package tn.sesame.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.sesame.model.MovieUserID;
import tn.sesame.model.User;
import tn.sesame.model.WatchList;

import java.util.List;

public interface WatchListRepository extends JpaRepository<WatchList, MovieUserID> {
    @Query("select w from WatchList w where w.movieUserID.email=:email")
 List<WatchList> getWatchListsByUser(@Param("email") String email);

}
