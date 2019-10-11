import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IMovie } from 'src/app/domain/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-upcomingmovies',
  templateUrl: './upcomingmovies.component.html',
  styleUrls: ['./upcomingmovies.component.scss']
})
export class UpcomingmoviesComponent implements OnInit {
  p: number = 1;
  s: number = 12;
  t: number = 1;
  top_movies:IMovie;
  upcoming :IMovie;
  isLoading;
  showError: boolean;
  // tslint:disable-next-line:max-line-length
  constructor(private service: MovieService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
} ;
  }

  ngOnInit() {
    this.init();
  
  }
  init(){
   let today = new Date().toISOString().slice(0,10);
   // let today= new Date().getFullYear().toString()+'-'+(new Date().getMonth()+1).toString()+'-'+new Date().getDate().toString();
    let max=(new Date().getFullYear()+1).toString()+'-01-01';
    console.log(today);
    this.isLoading = true;
    this.service.getUpcomingMovies(today,max,this.p).subscribe(
      res =>
      {this.upcoming = res
      this.t = res.total_pages;
      },
      erreur => {console.log('erreur movie');
      this.showError = true;
    
    },       ()=>{
        this.isLoading = false;
        console.log(this.upcoming)
      }
      
    );

  }
 changePage(event){
   this.p = event;
   this.init()
 }

}

