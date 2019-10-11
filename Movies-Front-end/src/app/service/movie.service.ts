import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IMovieCritere } from '../domain/moviecritere';
import { Observable } from 'rxjs';
import { IMovie } from '../domain/movie';
import { MovieVideosModel } from '../domain/moviemodelvideo';
import { MovieCastModel } from '../domain/moviecast';
import { MovieDetailsModel } from '../domain/moviedetail';
import { TvDetailsModel } from '../domain/tvshowdetail';
import { IEpisodeDetail } from '../domain/episodeDetail';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl=environment.myBaseUrl;
  private apikey ='cb4b280fa67edaa591ed48d4da421246';
 private searchmovie ='https://api.themoviedb.org/3/search/movie';
 private basemovie ='https://api.themoviedb.org/3/movie/'
 private searchtv='https://api.themoviedb.org/3/search/tv'
 private basetv ='https://api.themoviedb.org/3/tv/'
 private discovermovie='https://api.themoviedb.org/3/discover/movie?api_key=cb4b280fa67edaa591ed48d4da421246';
 private discovertv='https://api.themoviedb.org/3/discover/tv?api_key=cb4b280fa67edaa591ed48d4da421246';
private searchactor='https://api.themoviedb.org/3/search/person?api_key=cb4b280fa67edaa591ed48d4da421246&language=en-US&query=';

  constructor(private _http: HttpClient) { }
 
  getUpcomingMovies(today:string,max:string,page:number,lang?:string): Observable<IMovie> {
    return this._http.get<IMovie>(this.discovermovie + '&sortby=popularity.desc&primary_release_date.gte='+today+'&primary_release_date.lte='+max+'&page='+page+'&language='+lang);
  }
 
  getMovieByName(query: string,page?:number,lang?:string): Observable<IMovie>{
    return this._http.get<IMovie>(this.searchmovie+'?api_key='+this.apikey+'&query='+query+'&page='+page+'&language='+lang);
  }
  getMovieVideo(id:number): Observable<MovieVideosModel>{
    return this._http.get<MovieVideosModel>(this.basemovie+id+'/videos?api_key='+this.apikey);
  }
  getMovieCast(id:number): Observable<MovieCastModel>{
    return this._http.get<MovieCastModel>(this.basemovie+id+'/casts?api_key='+this.apikey);
  }
  getTvShowByName(query: string,page?:number,lang?:string): Observable<IMovie>{
    return this._http.get<IMovie>(this.searchtv+'?api_key='+this.apikey+'&query='+query+'&page='+page+'&language='+lang);
  }
  getTvVideo(id:number): Observable<MovieVideosModel>{
    return this._http.get<MovieVideosModel>(this.basetv+id+'/videos?api_key='+this.apikey);
  }
  getTvCast(id:number): Observable<MovieCastModel>{
    return this._http.get<MovieCastModel>(this.basetv+id+'/credits?api_key='+this.apikey);
  }
  getMovieById(id:number,lang?:string):Observable<MovieDetailsModel>{
    return this._http.get<MovieDetailsModel>(this.basemovie+id+'?api_key='+this.apikey+"&language="+lang);
  }
  getTvShowById(id:number,lang?:string):Observable<TvDetailsModel>{
    return this._http.get<TvDetailsModel>(this.basetv+id+'?api_key='+this.apikey+"&language="+lang);
  }
  
  getSimilarMovies(movie_id: number,lang?:string): Observable<IMovie> {
    return this._http.get<IMovie>(`${this.basemovie}${movie_id}/similar?api_key=${this.apikey}&language=${lang}`);
  }
  getTopRatedMovies(page:number,lang?:string): Observable<IMovie> {
    return this._http.get<IMovie>(this.discovermovie+'&language=en-US&sort_by=vote_average.desc&vote_count.gte=500&with_original_language=en&page='+page+'&language='+lang);
  }
  getNowPlayinMovies(lang?:string): Observable<IMovie> {
    return this._http.get<IMovie>(`${this.basemovie}now_playing?api_key=${this.apikey}&language=${lang}`);
  }
  getSimilarTv(movie_id: number,lang?:string): Observable<IMovie> {
    return this._http.get<IMovie>(`${this.basetv}${movie_id}/similar?api_key=${this.apikey}&language=${lang}`);
  }
  getTopRatedTv(lang?:string): Observable<IMovie> {
    return this._http.get<IMovie>(`${this.basetv}top_rated?api_key=${this.apikey}&language=${lang}`);
  }
  getNewEpisodes(): Observable<IMovie> {
    return this._http.get<IMovie>(`${this.basetv}on_the_air?api_key=${this.apikey}`);
  }
  getEpisodeDetails(idshow:number,season_number:number,episode:number): Observable<IEpisodeDetail> {
    return this._http.get<IEpisodeDetail>(this.basetv+idshow+'/season/'+season_number+'/episode/'+episode+'?api_key='+this.apikey);
  }


  getMoviesByGenre(genre:number,page:number): Observable<IMovie> {
    return this._http.get<IMovie>(this.discovermovie + '&sort_by=popularity.desc&with_genres='+genre+'&page='+page);
  }
  getTvByGenre(genre:number,page:number): Observable<IMovie> {
    return this._http.get<IMovie>(this.discovertv + '&sort_by=popularity.desc&with_genres='+genre+'&page='+page);
  }
  
  getMovieByCertif(certif:string,today:string): Observable<IMovie> {
    return this._http.get<IMovie>(this.discovermovie +'certification_country=US&certification='+certif+'&primary_release_date.lte='+today+'&popularity.desc');
  }
  getTvByCertif(certif:string,today:string): Observable<IMovie> {
    return this._http.get<IMovie>(this.discovertv +'certification_country=US&certification='+certif+'&primary_release_date.lte='+today+'&&popularity.desc');
  }
  getTvByYear(year:number): Observable<IMovie> {
    return this._http.get<IMovie>(this.discovertv +'popularity.desc&first_air_date_year='+year);
  }
  getMovieByYear(year:number): Observable<IMovie> {
    return this._http.get<IMovie>(this.discovermovie +'popularity.desc&year='+year);
  }
  getTvByNetwork(id:number): Observable<IMovie> {
    return this._http.get<IMovie>(this.discovertv +'popularity.desc&with_networks='+id);
  }
  getMovieByNetwork(id:number): Observable<IMovie> {
    return this._http.get<IMovie>(this.discovermovie +'popularity.desc&with_companies='+id);
  }

  discoverMovie(sortby?:string,genre?:string,companie?:string,year?:string,rating?:string,language?:string,page?:number): Observable<IMovie> {
    return this._http.get<IMovie>(this.discovermovie+'&sort_by='+sortby+'&with_genres='+genre+'&with_companies='+companie+'&year='+year+'&certification_country=US'+'&certification='+rating+'&with_original_language='+language+'&page='+page);
  }
  discoverTV(sortby?:string,genre?:string,network?:string,year?:string,language?:string,page?:number): Observable<IMovie> {
    return this._http.get<IMovie>(this.discovertv+'&sort_by='+sortby+'&with_genres='+genre+'&with_networks='+network+'&first_air_date_year='+year+'&with_original_language='+language+'&page='+page);
  }
  findByActor(query:string , page:number):Observable<any> {
    return this._http.get<any>(this.searchactor+query+'&page='+page);
  }
  trendingTV(): Observable<IMovie> {
    return this._http.get<IMovie>("https://api.themoviedb.org/3/trending/tv/week?api_key=cb4b280fa67edaa591ed48d4da421246");
      ;
  }
  trendingMovie(): Observable<IMovie> {
    return this._http.get<IMovie>("https://api.themoviedb.org/3/trending/movie/week?api_key=cb4b280fa67edaa591ed48d4da421246");
      ;
  }
}
