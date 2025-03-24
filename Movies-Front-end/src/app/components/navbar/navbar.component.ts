import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/domain/icategory';
import { FormControl, Validators } from '@angular/forms';
import { TokenStorageService } from 'src/app/service/tokenstorage.service';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/service/sharedservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavBarComponent implements OnInit {
  categories: ICategory[];
  keyword = '';
  isLoggedIn = false;
  isAdmin = false;
  roles: string;
  tvshows = 'TV Shows';
  Movies = 'Movies';
  Series = 'Series';
  Animes = 'Animes';
  lang: string;
  menuItems = [
    {
      label: 'Movies',
      icon: 'pi pi-video',
      routerLink: ['/allProduct', 'Movies']
    },
    {
      label: 'Series',
      icon: 'pi pi-tv',
      routerLink: ['/allProduct', 'Series']
    },
    {
      label: 'Upcoming',
      icon: 'pi pi-calendar',
      routerLink: ['/upcomingmovies']
    },
    {
      label: 'Top Rated',
      icon: 'pi pi-star',
      routerLink: ['/Top_Rated']
    },
    {
      label: 'My List',
      icon: 'pi pi-list',
      routerLink: ['/watchlist'],
      visible: this.isLoggedIn // Show only if logged in
    },
    {
      label: 'About',
      icon: 'pi pi-info-circle',
      routerLink: ['/settings']
    }
  ];
  constructor(public router: Router, private storageService: StorageService,  private translateService: TranslateService, private tokenStorage: TokenStorageService) {


  }

  ngOnInit() {


    this.lang = this.storageService.read('language');

    this.tokenStorage.currentStatus.subscribe(status => {
      this.isLoggedIn = status;



    });
  }
  changeLanguage(event) {
    console.log('language= ' + event);
    this.storageService.save('language', event);
    this.translateService.use(event);

  }

  search() {
    // Redirect to search page with keyword
    if (this.keyword.trim()) {
      window.location.href = `/searchbykeyword/${this.keyword}`;
    }
  }

}
