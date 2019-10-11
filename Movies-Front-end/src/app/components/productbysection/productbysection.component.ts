import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/service/category.service';
import { ICategory, Genre } from 'src/app/domain/icategory';
import { StorageService } from 'src/app/service/sharedservice.service';
import { IMovie } from 'src/app/domain/movie';
import { MovieModel } from 'src/app/domain/moviemodel';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-productbysection',
  templateUrl: './productbysection.component.html',
  styleUrls: ['./productbysection.component.scss']
})
export class ProductbysectionComponent implements OnInit {

  movies:MovieModel[];
  shows:IMovie;
name: string;
category: string;
all = 'all';
showSpinner: boolean;
categories: Genre;
sortlist = [{'id': 'vote_average.desc' , 'name' : 'Vote'}, {'id': 'popularity.desc' , 'name' : 'Popularity'},
 {'id': 'revenue.desc' , 'name' : 'Box Office'}];//box office , popularity ........
 certifications=['G','PG','PG-13','R','NC-17','NR']
 networks =[{'id':49,'name':'HBO'},{'id':213, 'name':'Netflix' },{'id':1024,'name':'Amazon Prime'},{'id':71, 'name':'CW'},{'id':71,'name':'AMC'},{'id':19, 'name':'Fox'},{'id':2243,'name':'DC Universe'},{'id':30,'name':'USA Network'},{'id':6,'name':'NBC'},{'id':453,'name':'HULU'},{'id':4343,'name':'Showtime Networks'},{'id':2,'name':'ABC'},{'id':2360,'name':'History'},{'id':4,'name':'BBC One'},{'id':43,'name':'National Geographic'}]
 companies=[{'id':420,'name':'Marvel Studios'},{'id':429,'name':'DC Comics'},{'id':174,'name':'Warner Bros. Pictures'},{'id':34,'name':'Sony Pictures'},{'id':2,'name':'Walt Disney Pictures'},{'id':33,'name':'Universal Pictures'},{'id':25,'name':'20th Century Fox'},{'id':4,'name':'Paramount'},{'id':1632,'name':'Lionsgate'},{'id':5,'name':'Columbia Pictures'},{'id':21,'name':'MGM Studios'}]
 countries=[{'id':'en','name':'USA'},{'id':'de','name':'Germany'},{'id':'fr','name':'Frensh'},{'id':'it','name':'Italy'},{'id':'es','name':'Spain'},{'id':'jp','name':'Japan'},{'id':'tr','name':'Turkey'},{'id':'hi','name':'India'}];
 keyword = '';
lang:string;
byActor:any;
language:string='en';
genre:string="";
year:string="";
rating:string="";
network:string="";
companie:string="";
sortby:string="popularity.desc";

today:string;

p: number = 1;
s: number = 20;
t: number = 1;
isLoading = true;showError: boolean;
 ;
SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  // tslint:disable-next-line:max-line-length
  constructor(private storageService: StorageService, private catService: CategoryService, private service: MovieService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
} ;
  }
  swipe(action = this.SWIPE_ACTION.RIGHT) {
    console.log(action)
    if (action === this.SWIPE_ACTION.RIGHT && this.p>1) {
this.p -=1;
    }
    if(action === this.SWIPE_ACTION.LEFT){
      this.p+=1;
    }
  }
  ngOnInit() {
    // this.service.findByActor('chris evans',1).subscribe(
    //   res=> console.log(res),
    //   err=>console.log(err.error)
    // )
    this.today= new Date().getFullYear().toString()+'-'+(new Date().getMonth()+1).toString()+'-'+new Date().getDate().toString();
    this.lang = this.storageService.read('language');
    
    this.route.params.subscribe(params => {
      this.name = params['nameSection'];
    }
    );
    this.catService.getMovieGenres(this.lang).subscribe(
      res => this.categories =res,
      err =>console.log(err.error),
      ()=>{
        console.log(this.categories)
      }
    )
   this.init();
   
  }
  init(){
    if(this.name=='Movies'){
      this.isLoading = true;
      this.service.discoverMovie(this.sortby,this.genre,this.companie,this.year,this.rating,this.language,this.p).subscribe(
        res =>
        {this.movies = res.results
        this.t = res.total_pages;
        console.log(this.t)
        },
        erreur => {console.log('erreur movie');
        this.showError = true;
      
      },        ()=>{
          this.isLoading = false;

        }
      )
     
     
    }else 
    {
      this.isLoading = true;
      this.service.discoverTV(this.sortby,this.genre,this.network,this.year,this.language,this.p).subscribe(
        res => 
        {this.shows =res
          this.t = res.total_pages;
        }
          ,
          erreur => {console.log('erreur serie');
          this.showError = true;
        
        },      )
      this.catService.getTvGenres().subscribe(
        res => this.categories =res,
        err =>console.log(err.error),
        ()=>{
          this.isLoading = false;

        }
      )

    }
  }
  
 changePage($event){
  this.p = $event;
  console.log(this.p);
  this.discover();

}
  
  search() {
    this.isLoading = true;
    if(this.keyword!=''){
    console.log(this.keyword)
    if(this.name=='Movies'){
      this.service.getMovieByName(this.keyword).subscribe(
        res => this.movies =res.results,
        err=>console.log(err.error),
        ()=>{
          console.log(this.movies)
          this.isLoading = false;

        }
      )
    }else{
      this.service.getTvShowByName(this.keyword).subscribe(
        res => this.shows =res,
        err=>console.log(err.error),
        ()=>{
          console.log(this.shows)
          this.isLoading = false;

        }
      )
    }
  }
  else{
    this.init();
  }
  }
  
getYears(){
  let years:number[]=[];
  for(let i=new Date().getFullYear();i>=1950;i--)
  years.push(i);
return years;
}

discover(){
  if(this.name=='Movies'){
    this.isLoading = true;
    this.service.discoverMovie(this.sortby,this.genre,this.companie,this.year,this.rating,this.language,this.p).subscribe(
      res => 
      {this.movies =res.results
      this.t = res.total_pages;
      console.log(this.t)
      },
      err=>console.log(err.error),
      ()=>{
        console.log(this.movies)
        this.isLoading = false;

      }
    )
  }else {
    this.isLoading = true;

    this.service.discoverTV(this.sortby,this.genre,this.network,this.year,this.language,this.p).subscribe(
      res =>
      {this.shows =res
        this.t = res.total_pages;

      },
      err=>console.log(err.error),
      ()=>{
        console.log(this.shows)
        this.isLoading = false;

      }
    )

  }
}
}
