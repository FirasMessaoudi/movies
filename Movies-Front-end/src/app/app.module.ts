import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SafeurlserviceService} from 'src/app/service/safeurlservice.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { StarRatingModule } from 'angular-star-rating';
import { FooterComponent } from './components/footer/footer.component';
import { ProductbysectionComponent } from './components/productbysection/productbysection.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { AllproductbycategoryComponent } from './components/allproductbycategory/allproductbycategory.component';
import { ProductbyimdbComponent } from './components/productbyimdb/productbyimdb.component';
import { UpcomingmoviesComponent } from './components/upcomingmovies/upcomingmovies.component';
import { NguCarouselOutlet } from '@ngu/carousel';
import { SearchComponent } from './components/search/search.component';
// import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { WatchlistComponent } from './components/watchlist/watchlist.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { CardmovieComponent } from './components/cardmovie/cardmovie.component';
import { ModalfavoritComponent } from './components/modalfavorit/modalfavorit.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';

// import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ActorsKnownForComponent } from './components/actors-known-for/actors-known-for.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SettingsComponent } from './components/settings/settings.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ActionsComponent } from './components/actions/actions.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {Button, ButtonDirective} from 'primeng/button';
import {Ripple} from 'primeng/ripple';
import {TabViewModule} from 'primeng/tabview';
import {LazyLoadImageModule} from 'ng-lazyload-image';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {RatingModule} from 'primeng/rating';
import {MenubarModule} from 'primeng/menubar';
import {BarRating} from 'ngx-bar-rating';
import { NgxSpinnerModule } from 'ngx-spinner';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    'pinch': { enable: false},
    'rotate': { enable: false}
  };
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
    // NgxUsefulSwiperModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NguCarouselOutlet,
    NgxPaginationModule,
    FormsModule,
    StarRatingModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    // ShareModule,
    TableModule,
    DialogModule,
    DropdownModule,
    MultiSelectModule,
    ModalModule.forRoot(),
     LazyLoadImageModule,
    // Ng4LoadingSpinnerModule.forRoot(),
    NgxSpinnerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      }
    }),
    InputTextModule,
    InputTextareaModule,
    ButtonDirective,
    Ripple,
    TabViewModule,
    LazyLoadImageModule,
    OverlayPanelModule,
    RatingModule,
    MenubarModule,
    Button,
    BarRating,

  ],
  providers: [{provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig}
   /* {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true
    }*/

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
