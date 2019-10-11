import { BrowserModule,HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SafeurlserviceService} from 'src/app/service/safeurlservice.service';
import { MaterialModule } from './material.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { StarRatingModule } from 'angular-star-rating';
import { FooterComponent } from './components/footer/footer.component';
import { ProductbysectionComponent } from './components/productbysection/productbysection.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AllproductbycategoryComponent } from './components/allproductbycategory/allproductbycategory.component';
import { ProductbyimdbComponent } from './components/productbyimdb/productbyimdb.component';
import { UpcomingmoviesComponent } from './components/upcomingmovies/upcomingmovies.component';
import { NguCarouselModule } from '@ngu/carousel';
import { SearchComponent } from './components/search/search.component';
import { SwiperModule } from 'angular2-useful-swiper';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { CardmovieComponent } from './components/cardmovie/cardmovie.component';
import { ModalfavoritComponent } from './components/modalfavorit/modalfavorit.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { ToastrModule } from 'ngx-toastr';
import { ShareModule } from '@ngx-share/core';
import { ActorsKnownForComponent } from './components/actors-known-for/actors-known-for.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { BarRatingModule } from "ngx-bar-rating";
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SettingsComponent } from './components/settings/settings.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DisqusModule } from "ngx-disqus";
import { ActionsComponent } from './components/actions/actions.component';
import { SlickModule } from 'ngx-slick';
import { SlideshowModule} from 'ng-simple-slideshow';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- import it
import { NgImageSliderModule } from 'ng-image-slider';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    'pinch': { enable: false},
    'rotate': { enable: false}
  }
}
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ProductbysectionComponent,
    ProductDetailsComponent,
    ProductsListComponent,
    SafeurlserviceService,
    AllproductbycategoryComponent,
    ProductbyimdbComponent,
    UpcomingmoviesComponent,
    SearchComponent,
    WatchlistComponent,
    HighlightsComponent,
    CardmovieComponent,
    ModalfavoritComponent,
    LoginComponent,
    ActorsKnownForComponent,
    ShowDetailsComponent,
    SettingsComponent,


    ActionsComponent,


    PageNotFoundComponent,
  ],
  imports: [
    NgImageSliderModule,
    ReactiveFormsModule,
    BrowserModule,
    SwiperModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MaterialModule,
    NguCarouselModule,
    MDBBootstrapModule.forRoot(),
    NgxPaginationModule,
    FormsModule,
    StarRatingModule.forRoot(),
    NgZorroAntdModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ShareModule,
    BarRatingModule,
    TableModule,
    DialogModule,
    DropdownModule,
    MultiSelectModule,
    ModalModule.forRoot(),
    SlickModule.forRoot(),
    SlideshowModule,
    LazyLoadImageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      }
    }),
    DisqusModule.forRoot('disqus_shortname')

  ],
  providers: [{provide:HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig}
   /* {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    }*/
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
