import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from 'src/app/domain/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
shows:IMovie;
movies:IMovie;
keyword = '';
p: number = 1;
ps:number= 1;
s: number = 12;
t: number = 1;
ts:number = 1;
isLoading = true;
  showError: boolean;
  constructor(private route: ActivatedRoute, private service: MovieService, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
} ;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.keyword = params['keyword'];
    }
    );
  
  this.init();
  this.initS();
  }
  init(){
    this.isLoading = true;
    this.service.getMovieByName(this.keyword,this.p).subscribe(
      res => 
      {this.movies =res
        this.t = res.total_pages;
      }
        ,
        erreur => {console.log('erreur movie');
        this.showError = true;
      
      },      ()=>{
        this.isLoading = false;

      }
    )
   
  }
  initS(){
    this.isLoading = true;
    this.service.getTvShowByName(this.keyword,this.ps).subscribe(
      res => 
      {this.shows =res
        this.ts = res.total_pages;
      }
        ,
        erreur => {console.log('erreur movie');
        this.showError = true;
      
      },      ()=>{
        this.isLoading = false;

      }
    )
  }
  changePage($event){
    this.p = $event;
    console.log(this.p);
    this.init();
  
  }
  changePageS($event){
    this.ps = $event;
    console.log(this.ps);
    this.initS();
  
  }
}
