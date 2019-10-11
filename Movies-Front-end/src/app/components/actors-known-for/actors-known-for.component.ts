import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { MoviePersonModel } from 'src/app/domain/movie-person.model';
import { MovieCastModel, MovieCast } from 'src/app/domain/moviecast';
import { TvCastModel } from 'src/app/domain/tv-cast.model';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { MovieVideosModel } from 'src/app/domain/moviemodelvideo';

@Component({
  selector: 'app-actors-known-for',
  templateUrl: './actors-known-for.component.html',
  styleUrls: ['./actors-known-for.component.scss']
})
export class ActorsKnownForComponent implements OnInit {
  person: MoviePersonModel;
  movies: MovieCast[];
  tv_credits: TvCastModel[];
  isLoadingResults: boolean;

  path ='https://image.tmdb.org/t/p/w185/';
 cover='https://image.tmdb.org/t/p/original/';
 youtube = 'https://www.youtube.com/embed/';

 video: MovieVideosModel;

  constructor(private route: ActivatedRoute,
    private location: Location,private serviceactor: CategoryService,private toastr: ToastrService,private categoryservice: CategoryService, private router: Router
    ) { }

  ngOnInit() {
    this.isLoadingResults = true;
    const id = this.route.snapshot.paramMap.get('id');
    const getPerson = this.serviceactor.getPerson(+id);
    const getPersonMovies = this.serviceactor.getPersonMovies(+id);
    const getPersonTv = this.serviceactor.getPersonTv(+id);

    forkJoin(getPerson, getPersonMovies, getPersonTv).subscribe(([person, movies, tv_credits]) => {
      this.isLoadingResults = false;
      this.person = person;
      this.movies = movies.cast;
      this.tv_credits = tv_credits.cast;
  
    })
 
  }
  back() {
    this.location.back();
  }


}
