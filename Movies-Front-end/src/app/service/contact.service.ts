import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../domain/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseUrl=environment.myBaseUrl;
  private url='/contacts';
  constructor(private _http: HttpClient) { }
  addMessage(message:Contact):Observable<Contact>{
    return this._http.post<Contact>(this.baseUrl+this.url+'/addMessage',message);
  }
}
