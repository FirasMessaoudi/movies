package tn.sesame.service;

import org.springframework.stereotype.Service;
import tn.sesame.model.MovieNote;
import tn.sesame.model.MovieUserID;
import tn.sesame.model.WatchList;
import tn.sesame.repository.MovieNoteRepository;

import java.util.Optional;

@Service
public class MovieNoteService {
    private final MovieNoteRepository movieNoteRepository;

    public MovieNoteService(MovieNoteRepository movieNoteRepository) {
        this.movieNoteRepository = movieNoteRepository;
    }
    public MovieNote rateMovie(MovieNote movieNote){
        return movieNoteRepository.save(movieNote);
    }
    public int getNoteByMovie(MovieUserID movieUserID){
        Optional<MovieNote> movieNote = movieNoteRepository.findById(movieUserID);
        if(movieNote.isPresent()){
            return movieNote.get().getNote();
        }
        return 0;
    }
}
