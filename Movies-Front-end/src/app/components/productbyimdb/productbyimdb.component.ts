import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from 'src/app/domain/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-productbyimdb',
  templateUrl: './productbyimdb.component.html',
  styleUrls: ['./productbyimdb.component.scss']
})
export class ProductbyimdbComponent implements OnInit {
  p: number = 1;
  s: number = 12;
  t: number = 1;
  top_rated:IMovie;
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
   this.isLoading = true;
    this.service.getTopRatedMovies(this.p).subscribe(
      res =>
      {this.top_rated = res
      this.t = res.total_pages;
      },
      erreur => {console.log('erreur movie');
      this.showError = true;
    
    },      ()=>{
        console.log(this.top_rated);
        this.isLoading = false;

      }
    );
  }
 changePage(event){
   this.p = event;
   this.init()
 }


}
