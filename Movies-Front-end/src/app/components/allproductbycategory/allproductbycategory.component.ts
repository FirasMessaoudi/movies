import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from 'src/app/domain/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-allproductbycategory',
  templateUrl: './allproductbycategory.component.html',
  styleUrls: ['./allproductbycategory.component.scss']
})
export class AllproductbycategoryComponent implements OnInit {
  movies: IMovie;
  category: number;
  name:string
  section:string;
  p: number = 1;
s: number = 12;
t: number = 1;
isLoading;
showError= false;
  constructor(private route: ActivatedRoute, private router: Router, private movieService: MovieService) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
} ;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
    }
    );
    this.route.params.subscribe(params => {
      this.name = params['name'];
    }
    );
    this.route.params.subscribe(params => {
      this.section = params['section'];
    }
    );
    
   this.init()
  }
  init(){
    this.isLoading = true;
    if(this.section=='Movies'){
      this.movieService.getMoviesByGenre(this.category,this.p).subscribe(
        res =>
        {this.movies = res
        this.t = res.total_pages;
        },
        erreur => {console.log('erreur section and category');
        this.showError = true;
      
      },
        ()=>{
          console.log(this.movies);
          this.isLoading =false;

        }
      );
  
    } else {
      this.movieService.getTvByGenre(this.category,this.p).subscribe(
        res =>
        {this.movies = res
        this.t = res.total_pages;
        },
        erreur => {
        console.log('erreur section and category');
        this.showError = true;
      
      },        ()=>{
          console.log(this.movies)
          this.isLoading =false;

        }
      );
    }
    this.isLoading = false;

  }
  changePage($event){
    this.p = $event;
    console.log(this.p);
    this.init();
  
  }


}
