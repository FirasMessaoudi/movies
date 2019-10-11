import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/domain/icategory';
import { CategoryService } from 'src/app/service/category.service';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { StorageService } from 'src/app/service/sharedservice.service';
import { IMovie } from 'src/app/domain/movie';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  p = 1;
  isLoadingResults: boolean;


  movies: IMovie;
  tvs: IMovie;

  categories: ICategory[];
  lang:string;
  showError: boolean;

  // tslint:disable-next-line:max-line-length
  constructor(private storageService: StorageService, private _service: MovieService) {
   }

  ngOnInit() {

    this.isLoadingResults = true;
    this.lang = this.storageService.read('language');
    this._service.trendingMovie().subscribe(
     res => this.movies = res,
     erreur => {console.log('erreur movie');
     this.showError = true;
   
   },     ()=>{
       console.log(this.movies.results)
       this.isLoadingResults = false;
     }
    )
    this._service.trendingTV().subscribe(
      res => this.tvs = res,
      erreur => {console.log('erreur movie');
      this.showError = true;
    
    },      ()=>{
        console.log(this.tvs.results)
        
      }
     )
   
  }
 

}
