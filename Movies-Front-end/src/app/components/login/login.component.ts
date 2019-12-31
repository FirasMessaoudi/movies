import { Component, OnInit, ViewChild } from '@angular/core';
import { ILogin } from 'src/app/domain/ilogin';
import { AuthService } from 'src/app/service/authservice.service';
import { TokenStorageService } from 'src/app/service/tokenstorage.service';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/domain/iuser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'angular-bootstrap-md';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('framelogin') modalLogin: ModalDirective;
  @ViewChild('framesignup') modalSignUp: ModalDirective;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string;
  private loginInfo: ILogin;
  username='';
  password='';
  firstname='';
  lastname='';
  email='';
  profil:string;
  isAdmin=false;
  signUpForm:FormGroup;
  constructor(private fb:FormBuilder,private toastr: ToastrService,private authService: AuthService,
     private tokenStorage: TokenStorageService,     private spinnerService: Ng4LoadingSpinnerService,
     ) { }

  ngOnInit() {
    this.tokenStorage.currentStatus.subscribe(status => {
      this.isLoggedIn = status;



    })
    this.createSignUpForm();
  }
  createSignUpForm(){
    this.signUpForm = this.fb.group({
      'firstname':[null,Validators.required],
      'username': [null,Validators.required],
      'email':[null,Validators.email],
      'password':[null,Validators.minLength(6)]
    })
  }
  signUp(){
    if(this.signUpForm.status=='INVALID'){
      console.log(this.signUpForm.value);
      this.toastr.error('You must fill all the fields')
      return ;

    }
    this.spinnerService.show();
    let val = this.signUpForm.value;
    let user= new IUser(val.firstname,val.firstname,val.username,val.email,val.password); 
    this.authService.signUp(user).subscribe(
      data => {
        console.log(data);
        this.tokenStorage.saveToken(data.token);
        this.profil = this.tokenStorage.getUsername();
        console.log(this.profil);
        
      //  this.tokenStorage.saveUsername(data.username);
        //this.tokenStorage.saveAuthorities(data.authorities);
        this.isLoggedIn = true;
        this.modalSignUp.hide();
        //this.reloadPage();
       // this.toastr.success("Your account has been created succesfully ");
      },
      error => {
        console.log(error);
        this.toastr.error("username or email already exist !");
        this.spinnerService.hide();

      },
      () => {
        this.spinnerService.hide();

      }
    )
    
  }
  attemptLogin(){
    this.loginInfo = new ILogin(this.username, this.password);
    this.spinnerService.show();
    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        console.log(data);
        
        this.tokenStorage.saveToken(data.token);
        //this.tokenStorage.saveUsername(data.username);
        //this.tokenStorage.saveAuthorities(data.authorities);
       // this.toastr.success("Congratulations Mr", data.authorities.toString());
       this.profil = this.tokenStorage.getUsername();
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        console.log(this.profil);
       // this.roles = this.tokenStorage.getAuthorities();
       // console.log("roled= "+this.roles);
       // this.reloadPage();
       this.modalLogin.hide();
      },
      error => {
        console.log(error);
        this.spinnerService.hide();
        this.toastr.error("Check Your Username or Password","Autnetification failed");
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      },
      () => {
        this.spinnerService.hide();
      }
    );
  }
  reloadPage() {
    window.location.reload();
  }
  signout(){
    
    this.tokenStorage.signOut();
    this.reloadPage();
  
    
  }
}
