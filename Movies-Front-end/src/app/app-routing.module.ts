import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductbysectionComponent } from './components/productbysection/productbysection.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AllproductbycategoryComponent } from './components/allproductbycategory/allproductbycategory.component';
import { ProductbyimdbComponent } from './components/productbyimdb/productbyimdb.component';
import { UpcomingmoviesComponent } from './components/upcomingmovies/upcomingmovies.component';
import { SearchComponent } from './components/search/search.component';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { ActorsKnownForComponent } from './components/actors-known-for/actors-known-for.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { SettingsComponent } from './components/settings/settings.component';
const appRoutes: Routes = [
  {path: 'viewDetail/:section/:idProduct', component: ProductDetailsComponent},
  {path: 'allProduct/:nameSection', component: ProductbysectionComponent},
  {path: 'allProductByCategory/:section/:name/:category', component: AllproductbycategoryComponent},

  {path: 'home', component: ProductsListComponent},
  {path: 'sortall/:critere', component: ProductbyimdbComponent},
  {path: 'upcomingmovies', component: UpcomingmoviesComponent},
  {path: 'searchbykeyword/:keyword', component: SearchComponent},
  {path: 'watchlist', component: WatchlistComponent},
  {path: 'actorworks/:id', component: ActorsKnownForComponent},
  {path: 'TvDetails',component:ShowDetailsComponent},
  {path: '', component: ProductsListComponent},
  {path: 'settings',component: SettingsComponent},
  {path:'Top_Rated', component: ProductbyimdbComponent},

  {path: '**', redirectTo: 'home' },
  {path:'',redirectTo: 'home', pathMatch: 'full'}


  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
