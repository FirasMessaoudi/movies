import { Component, OnInit } from '@angular/core';
import { IFavorit } from 'src/app/domain/ifavorit';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/domain/iuser';
import { TokenStorageService } from 'src/app/service/tokenstorage.service';
import { MovieDetailsModel } from 'src/app/domain/moviedetail';
import { TvDetailsModel } from 'src/app/domain/tvshowdetail';
import { IMovieUserId } from 'src/app/domain/imovieuserid';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {

  submitted = false;
  watch: boolean;
  message: string;
  favorits: IFavorit[]=[];
  watchedMovies: MovieDetailsModel[]=[];
  watchedTv: TvDetailsModel[]=[];
  unWatchedMovies: MovieDetailsModel[]=[];
  unWatchedTv: TvDetailsModel[]=[];
  myWatchList: IFavorit[];
  favoritsTv:TvDetailsModel[]=[];
  favoritsMovies:MovieDetailsModel[]=[];
  movieUser: IMovieUserId;
  user: IUser;
  username:string;
  isLoggedIn: boolean;
  // tslint:disable-next-line:max-line-length
  constructor(private tokenStorage: TokenStorageService,private service: UserService, private route: ActivatedRoute, private router: Router, private movieService: MovieService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
} ;
  }

  ngOnInit() {
    this.tokenStorage.currentStatus.subscribe(status => {
      this.isLoggedIn = status;
      if(this.isLoggedIn){
        this.username=this.tokenStorage.getUsername();
    
        this.service.getUser(this.username).subscribe(
          res => this.user = res,
          err => console.log(this.user.email),
          () => {
           
           this.getWatchList();
           this.getFavoris();
    
          }
        );
      } else {
        this.router.navigate(['/not-found']);
      }
    })
    
  
    
  
}
updateFav($event){
  let idM = this.favoritsMovies.findIndex(m=>m.id==$event);
  let idTv=this.favoritsTv.findIndex(tv=>tv.id ==$event);
  console.log(idM);
  console.log(idTv);
  
  if(idM!==undefined)
  console.log('movie');
  if(idTv!==undefined){
  console.log('tv');
  this.favoritsTv.splice(idTv,1);
  }
  
  

//  if(this.favori)
}
updateWatchlist($event){
  let idwM = this.watchedMovies.findIndex(m=>m.id==$event);
  let idwTv=this.watchedTv.findIndex(tv=>tv.id ==$event);
  let idUwM=this.unWatchedMovies.findIndex(m=>m.id==$event);
  let idUTv=this.unWatchedTv.findIndex(m=>m.id==$event);
  this.watchedMovies.splice(idwM,1);
  this.watchedTv.splice(idwTv,1);
  this.unWatchedMovies.splice(idUwM,1);
  this.unWatchedTv.splice(idUTv,1);

  }

getWatchList(){
  this.watchedMovies = [];
  this.watchedTv = [];
  this.unWatchedMovies = [];
  this.unWatchedTv = [];
  this.myWatchList = [];
  this.service.getWatchList(this.user.email).subscribe(
    res => this.myWatchList =res,
    err=>console.log(err.error),
    ()=>{
      this.myWatchList.forEach(element => {
        if(element.section=='Series'){
          this.movieService.getTvShowById(element.movieUserID.idMovie).subscribe(
            res=>
            {
              if(element.watched)
              this.watchedTv.push(res)
              else 
              this.unWatchedTv.push(res)
           },
            err=>console.log(err.error),
          )
        } else {
         this.movieService.getMovieById(element.movieUserID.idMovie).subscribe(
           res=>
           {
             if(element.watched)
             this.watchedMovies.push(res)
             else 
             this.unWatchedMovies.push(res)
          },            
           err=>console.log(err.error),
           ()=>{
             console.log(this.unWatchedMovies)
           }
         )
        }
      });
    }
 );
}
getFavoris(){
  this.favorits = [];
  this.favoritsTv = [];
  this.favoritsMovies = [];
  this.service.getFavoritsByUser(this.user.email).subscribe(
    res =>this.favorits = res,
    er =>console.log(er.error),
    ()=>{

      this.favorits.forEach(element => {
        if(element.section=='Series'){
          this.movieService.getTvShowById(element.movieUserID.idMovie).subscribe(
            res=>
            {
             this.favoritsTv.push(res);
           },
            err=>console.log(err.error),
          )
        } else {
         this.movieService.getMovieById(element.movieUserID.idMovie).subscribe(
           res=>
           {
            this.favoritsMovies.push(res);

          },            
           err=>console.log(err.error),
         )
        }
      });


    }

  )
}
  
}
