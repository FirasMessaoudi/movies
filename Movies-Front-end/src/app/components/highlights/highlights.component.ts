import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';
import { IMovie } from 'src/app/domain/movie';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements OnInit {
  highlightmovies: IMovie;
  tvs:IMovie;
  array = [ 1, 2, 3, 4 ];
  name = 'Angular with Swiper';
  mySwiper: Swiper;
  p=1;
  constructor(config: NgbCarouselConfig, private _service: MovieService,private router: Router) {
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
    config.showNavigationArrows = true;
   }

  
  ngOnInit(){
    
    this._service.trendingMovie().subscribe(
      res => this.highlightmovies = res,
      err=> console.log(err.error),
      ()=>{
        console.log(this.highlightmovies.results)
      }
     )
     this._service.trendingTV().subscribe(
       res => this.tvs = res,
       err=> console.log(err.error),
       ()=>{
         console.log(this.tvs.results)
         
       }
      )
      //
      
  }
  goToMovie($event){
   this.router.navigate(['/user_invitation','Movies',$event])
  }

}
