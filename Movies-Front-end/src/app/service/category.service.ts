import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory, Genre } from '../domain/icategory';
import { environment } from 'src/environments/environment';
import { TvCreditsModel } from '../domain/tv-credits.model';
import { MovieCastModel } from '../domain/moviecast';
import { MoviePersonModel } from '../domain/movie-person.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl=environment.myBaseUrl;
  URL = '/categories';
  private urladmin='/admin/';
  private url_person = 'https://api.themoviedb.org/3/person';
  moviegenres='https://api.themoviedb.org/3/genre/movie/list?api_key=cb4b280fa67edaa591ed48d4da421246';
  tvgenres='https://api.themoviedb.org/3/genre/tv/list?api_key=cb4b280fa67edaa591ed48d4da421246';

  private api_key ='cb4b280fa67edaa591ed48d4da421246';


  constructor(private _http: HttpClient) { }
  getMovieGenres(lang?:string):Observable<Genre> {
    return this._http.get<Genre>(this.moviegenres+'&language='+lang);
    }
    getTvGenres(lang?:string):Observable<Genre> {
      return this._http.get<Genre>(this.tvgenres+'&language='+lang);
      }
 getPersonMovies(person_id: number): Observable<MovieCastModel> {
  return this._http.get<MovieCastModel>(`${this.url_person}/${person_id}/movie_credits?api_key=${this.api_key}`);
}
getPersonTv(person_id: number): Observable<TvCreditsModel> {
  return this._http.get<TvCreditsModel>(`${this.url_person}/${person_id}/tv_credits?api_key=${this.api_key}`);
}
getPerson(person_id: number): Observable<MoviePersonModel> {
  return this._http.get<MoviePersonModel>(`${this.url_person}/${person_id}?api_key=${this.api_key}`);
}


}
