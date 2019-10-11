package tn.sesame.controller;

import org.springframework.web.bind.annotation.*;
import tn.sesame.model.MovieNote;
import tn.sesame.model.MovieUserID;
import tn.sesame.service.MovieNoteService;

@RestController
@CrossOrigin(origins = "*" )
@RequestMapping("/movieNote")
public class MovieNoteController {
    private final MovieNoteService movieNoteService;

    public MovieNoteController(MovieNoteService movieNoteService) {
        this.movieNoteService = movieNoteService;
    }
    @PostMapping("/rateMovie")
    public MovieNote rateMovie(@RequestBody MovieNote movieNote){
        return movieNoteService.rateMovie(movieNote);
    }
    @PostMapping("/getMovieNote")
    public int getNoteByMovie(@RequestBody MovieUserID movieUserID){
        return movieNoteService.getNoteByMovie(movieUserID);

    }
}
