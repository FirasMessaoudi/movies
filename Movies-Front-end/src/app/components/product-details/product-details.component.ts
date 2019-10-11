import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IUser } from 'src/app/domain/iuser';
import { UserService } from 'src/app/service/user.service';
import { IMovieUserId } from 'src/app/domain/imovieuserid';
import { IFavorit } from 'src/app/domain/ifavorit';
import { IMovie } from 'src/app/domain/movie';
import { MovieVideosModel } from 'src/app/domain/moviemodelvideo';
import { MovieCastModel } from 'src/app/domain/moviecast';
import { TokenStorageService } from 'src/app/service/tokenstorage.service';
import { ToastrService } from 'ngx-toastr';
import { MovieModel } from 'src/app/domain/moviemodel';
import { TvDetailsModel } from 'src/app/domain/tvshowdetail';
import { ISeason } from 'src/app/domain/season';
import { IEpisode } from 'src/app/domain/episode';
import { StorageService } from 'src/app/service/sharedservice.service';
import { TranslateService } from '@ngx-translate/core';
import { MovieDetailsModel } from 'src/app/domain/moviedetail';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id: number;
  closeResult: string;
  movies: IMovie;
  similar:IMovie;
  year: number;
 path ='https://image.tmdb.org/t/p/w185/';
 youtube = 'https://www.youtube.com/embed/';
 trailer :string;
 video: MovieVideosModel;
 actors: MovieCastModel;
  note =0;
  user: IUser;
  message: string;
  movieUserID: IMovieUserId;
  existsInFav :boolean;
  existsInWatchList :boolean;
  isLoadingResults= true;
  myWatchList: IFavorit[];
  similarProducts: MovieModel[];
  username:string;
  isLoggedIn=false;
  link:string;
  showDetail: TvDetailsModel;
  movieDetail:MovieDetailsModel;
  seasonNumber=1;
  season: ISeason;
  nbEpisodes:number[]=[];
  episode: IEpisode;
  lang:string;
  read=true;
  section='';
  showError: boolean;


  // tslint:disable-next-line:max-line-length
  constructor( private storageService: StorageService,  private translateService: TranslateService,private toaster: ToastrService,private tokenStorage: TokenStorageService,private userservice: UserService, private modalService: NgbModal, private location: Location, private sanitizer: DomSanitizer, private route: ActivatedRoute, private router: Router, private movieService: MovieService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
          return false;
} ;

  }
 
  openSm(content) {
    this.modalService.open(content, { size: 'sm', centered: true });
  }
  ngOnInit() {
    this.read=true;

   // this.id = +this.route.snapshot.params['idProduct'];
   this.lang = this.storageService.read('language');
console.log(this.lang);
   if(this.tokenStorage.getToken())
   this.isLoggedIn=true;
   this.route.params.subscribe(params => {
     this.id = params['idProduct'];
     this.section = params['section'];
   }
   );
   if(this.section ==='Series') {
   this.movieService.getTvShowById(this.id,this.lang).subscribe(
     res => this.showDetail = res,
     erreur => {console.log('erreur SERIe');
     this.showError = true;
   
   },   ()=>{
   
      this.movieService.getSimilarTv(this.showDetail.id).subscribe(
        res => this.similar =res,
        err =>console.log("ma jewech"),
        ()=>{
         // console.log("siim before"+this.similar.results.length);
          this.similarProducts=this.similar.results;
          //console.log("siim" +this.similarProducts.length)
        }
      )
      this.movieService.getTvCast(this.showDetail.id).subscribe(
        res=>this.actors =res,
        err=>console.log('erreur'),
        ()=>{
        
          this.movieService.getTvVideo(this.showDetail.id).subscribe(
            res =>this.video =res,
            err => console.log('erreur'),
            ()=>{
              this.youtube+=this.video.results[0].key;
            }
            
          )
        }
      );
  
         this.isLoadingResults=false;
    }
    
   );

  } else{

    this.movieService.getMovieById(this.id,this.lang).subscribe(
      res => this.movieDetail = res,
      erreur => {console.log('erreur movie');
      this.showError = true;
    
    },    ()=>{
    this.link="https://videospider.in/getvideo?key=l6IeT0ahNeECt2IH&video_id="+this.movieDetail.id+"&tmdb=1";
     // if(this.product.nbSeasons >-1){
       this.movieService.getSimilarMovies(this.movieDetail.id).subscribe(
         res => this.similar =res,
         err =>console.log("ma jewech"),
         ()=>{
         //  console.log("siim before"+this.similar.results.length);
           this.similarProducts=this.similar.results;
          // console.log("siim" +this.similarProducts.length)
         }
       )
       this.movieService.getMovieCast(this.movieDetail.id).subscribe(
         res=>this.actors =res,
         err=>console.log('erreur'),
         ()=>{
         
          this.movieService.getMovieVideo(this.movieDetail.id).subscribe(
            res =>this.video =res,
            err => console.log('erreur'),
            ()=>{
              this.youtube+=this.video.results[0].key;
            }
            
          )
         }
       );
   
          this.isLoadingResults=false;
     }
     
    );
  }
            
  if(this.tokenStorage.getToken()){
                  this.username=this.tokenStorage.getUsername();
                
                this.userservice.getUser(this.username).subscribe(
                  res => this.user = res,
                  err => console.log('err'),
                  () => {
                    console.log(this.user);
                    this.userservice.getMovieNote(new IMovieUserId(this.id,this.user.email)).subscribe(
                      res => this.note = res,
                      err =>console.log(err.error),
                      ()=>{
                        console.log(this.note);
                        this.userservice.existsInFavoris(new IMovieUserId(this.id,this.user.email)).subscribe(
                          res => this.existsInFav = res,
                          err => console.log(err.error),
                          () => {
                            console.log(this.existsInFav);
                            this.userservice.existsInWatchList(new IMovieUserId(this.id,this.user.email)).subscribe(
                             res => this.existsInWatchList = res,
                             err => console.log(err.error),
                           ),
                           ()=>{
                             console.log(this.existsInWatchList);
                           
                           }
                          }
                        );
                      }
                    )
                   
                  
                  }
                );      
                }

     
   
  }
back() {
  this.location.back();
}

onOpen(event: any) {
  console.log(event);
}
addOrDeleteWatchList() {
  if(this.tokenStorage.getToken()){
    let fav = new IFavorit(new IMovieUserId(this.id,this.user.email));
    fav.watched = false;
    fav.section = this.section;

  this.userservice.addToList(fav)
  .subscribe(
    () => this.message = 'hhhhh');
  //  alert('added to watch list');
    this.existsInWatchList = !this.existsInWatchList;
    if(this.existsInWatchList)
    this.toaster.success("Program added to watchlist");
    else
    this.toaster.success("product removed from watchlist")
  }
  else {
    this.toaster.warning("you must sign in first");
  }

}
addOrDeleteFavorite() {
  if(this.tokenStorage.getToken()){
    let fav = new IFavorit(new IMovieUserId(this.id,this.user.email));
    fav.section = this.section;
  this.userservice.addToMyFav(fav).subscribe(
    res=>console.log(res),
    err=> console.log(err.error),
    () => console.log('user = ', this.user.email, 'id = ' , this.id),
    );
    this.existsInFav = !this.existsInFav;
    if(this.existsInFav)
    this.toaster.success("program added to favorite");
    else 
    this.toaster.success("program removed from favorite");
  }
  else{
    this.toaster.warning("you must sign in first");
  }
}
rateMovie(event) {
// this.movieUserID = new IMovieUserId(this.id, this.user.email);
let fav = new IFavorit(new IMovieUserId(this.id,this.user.email));
fav.section = this.section;
fav.note = event;
if(this.tokenStorage.getToken()){
console.log(this.note);
this.note=event;
this.userservice.rateMovie(fav).subscribe(
  res=>console.log(res),
  err => console.log('msg')
);
console.log(this.note);
}
else {
  this.toaster.warning("Sign to rate this program");
}
}
changeSeason(event){
this.seasonNumber=event;
this.season=this.showDetail.seasons[this.seasonNumber];
for(let i=0;i<this.season.episode_count;i++)
this.nbEpisodes[i]=i+1;
}
}

