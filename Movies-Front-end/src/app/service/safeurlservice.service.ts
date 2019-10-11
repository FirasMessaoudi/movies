import { Injectable, PipeTransform, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
@Pipe({
  name: 'safeUrl'
})
export class SafeurlserviceService implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {}
  transform(url) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
