package tn.sesame.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.sesame.model.MovieNote;
import tn.sesame.model.MovieUserID;

public interface MovieNoteRepository extends JpaRepository<MovieNote, MovieUserID> {
    @Query("select sum(m.note) / count (m.note) from MovieNote m where m.movieUserID.idMovie=:x")
    public double getMovieNote(@Param("x") Long idMovie);
}
