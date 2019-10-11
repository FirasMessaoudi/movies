import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../domain/iuser';
import { Observable } from 'rxjs';
import { IFavorit } from '../domain/ifavorit';
import { IMovieUserId } from '../domain/imovieuserid';
import { environment } from 'src/environments/environment';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl=environment.myBaseUrl;
  URL =  this.baseUrl+'/user/';
  URL2 = this.baseUrl+'/favoris/addOrDeleteFromFavoris/';
  URL3 =  this.baseUrl+'/favoris/movie/firas_messaoudi@outlook.fr/';
  addLToListUrl =  this.baseUrl+'/watchlist/addToWatchList';
  urlExistInWatchList =  this.baseUrl+'/watchlist/existInWatchList';
  urlExistInFavoris =  this.baseUrl+'/favoris/existInFavorit';

  urlWatch =    this.baseUrl+'/watchlist/updateWatchList';
  urlRate =    this.baseUrl+'/movieNote/rateMovie/';
  urUserFavoris =    this.baseUrl+'/favoris/getFavoris/';
  urlUserWatchList =  this.baseUrl+'/watchlist/getWatchList/';
  urlIsWatched =  this.baseUrl+'/watchlist/isWatched/';
  addtofav =  this.baseUrl+'/favoris/addFavorit';
  getMovieNoteURL = this.baseUrl+'/movieNote/getMovieNote';
  getWatchListByMovie = this.baseUrl+'/watchlist/getWatchListByMovie/';

  constructor(private http: HttpClient) {
  }
  getUser(username:string): Observable<IUser> {
    return this.http.get<IUser>(this.URL+username);
  }
  
  addToList (fav: IFavorit): Observable<any> {
    return this.http.post(this.addLToListUrl, fav, httpOptions);
  }
  existsInWatchList(movieUserID:IMovieUserId): Observable<boolean> {
    return this.http.post<boolean>(this.urlExistInWatchList ,movieUserID);
  }
  existsInFavoris(movieUserID:IMovieUserId): Observable<boolean> {
    return this.http.post<boolean>(this.urlExistInFavoris,movieUserID);
  }
  isWatched(movieUserID:IMovieUserId): Observable<boolean> {
    return this.http.post<boolean>(this.urlIsWatched,movieUserID);
  }
  watchUnWatchMovie(fav: IFavorit): Observable<any> {
   return this.http.put(this.urlWatch, fav, httpOptions);
  }
  getFavoritsByUser(email: string): Observable<IFavorit[]> {
    return this.http.get<IFavorit[]>(this.urUserFavoris + email);
  }
  rateMovie(fav:IFavorit) {
  
    return this.http.post(this.urlRate, fav, httpOptions);
  }
  getWatchList(email: string): Observable<IFavorit[]> {
    return this.http.get<IFavorit[]>(this.urlUserWatchList + email );
  }
  addToMyFav(fav: IFavorit) {
    return this.http.post(this.addtofav,fav,httpOptions);
  }
  getMovieNote(userId:IMovieUserId):Observable<number>{
    return this.http.post<number>(this.getMovieNoteURL ,userId);
  }
  getWatchListById(idMovie:number, email:string):Observable<IFavorit>{
    return this.http.get<IFavorit>(this.getWatchListByMovie +email+'/'+idMovie);
  }

}
