import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/service/tokenstorage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  isAdmin=false;
  isLoggedIn=false;
  profil:string;
  roles: string;

  constructor(private toastr: ToastrService,private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.profil=this.tokenStorage.getUsername();
      this.roles = this.tokenStorage.getAuthorities();
      if(this.tokenStorage.getAuthorities().includes('ROLE_ADMIN'))
      this.isAdmin=true;
    }
  }
  reloadPage() {
    window.location.reload();
  }
  signout(){
    let ok =window.confirm("Are you sure ?")
    if(ok){
    this.tokenStorage.signOut();
    this.reloadPage();
    }
    
  }
}
