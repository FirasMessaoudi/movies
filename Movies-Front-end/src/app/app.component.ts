import { Component, HostListener, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { StorageService } from './service/sharedservice.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  template: string =` <img src="https://www.knoll.com/images/cylindo-spinner-512v2.gif" width="100%" height="100%" />`;
  ngOnInit(): void {
    if (!this.lang) {
      this.storageService.save('language', 'en');
  }
  console.log(this.router.url)
  }
  title = 'Movies Box';
  lang: string = this.storageService.read('language');

  constructor (public router: Router,private storageService: StorageService, public translateService: TranslateService) {
    this.translateService.setDefaultLang('en');

  }
  scrollTop() {
    window.scrollTo({left: 0, top: 0, behavior: 'smooth'});
}
@HostListener('window:scroll', ['$event']) scrollHandler(event) {
  const number = window.scrollY;
  const el = document.getElementById('btn-returnToTop');
  if (number >= 500) {
      el.className = 'show';

  } else {
      el.className = 'hide';
  }
}
}
