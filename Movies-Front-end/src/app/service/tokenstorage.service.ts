import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import { BehaviorSubject } from 'rxjs';
const helper = new JwtHelperService();
const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
 
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private statusSource = new BehaviorSubject<boolean>(localStorage.getItem(TOKEN_KEY) != null);
  currentStatus = this.statusSource.asObservable();
  private roles:string;
  constructor() { }
 
  signOut() {
    sessionStorage.removeItem(TOKEN_KEY);
    this.statusSource.next(false);

  }
 
  public saveToken(token: string) {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);
    this.statusSource.next(true);

    

  }
 
  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }
 
  // public saveUsername(username: string) {
  //   window.sessionStorage.removeItem(USERNAME_KEY);
  //   window.sessionStorage.setItem(USERNAME_KEY, username);
  // }
 
  public getUsername(): string {
    if(sessionStorage.getItem(TOKEN_KEY) != null)
    return helper.decodeToken(sessionStorage.getItem(TOKEN_KEY)).sub; 
   }
 
  // public saveAuthorities(authorities: string[]) {
  //   window.sessionStorage.removeItem(AUTHORITIES_KEY);
  //   window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  // }
 
  // public getAuthorities(): string {
  //   this.roles = '';
 
  //     this.roles=sessionStorage.getItem(AUTHORITIES_KEY)
 
  //   return this.roles;
  // }
  validToken(): boolean {
    if ( sessionStorage.getItem(TOKEN_KEY) !== null ) {

      if (!helper.isTokenExpired(sessionStorage.getItem(TOKEN_KEY))) {
        return true;
      } else  {
        this.signOut();
        return false; }
    } else {

      return false;
    }
  }

 

  getIsActive() {
    if(sessionStorage.getItem(TOKEN_KEY) != null)
      return helper.decodeToken(sessionStorage.getItem(TOKEN_KEY)).active;
  }

  getDecodeToken(){
    if(sessionStorage.getItem(TOKEN_KEY) != null)
      return helper.decodeToken(sessionStorage.getItem(TOKEN_KEY));
  }
}