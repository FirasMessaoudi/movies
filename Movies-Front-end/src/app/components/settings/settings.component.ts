import { Component, OnInit } from '@angular/core';
import { StorageService } from "src/app/service/sharedservice.service";
import { TranslateService } from '@ngx-translate/core';
import { MatSlideToggleChange, MatSelectChange } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contact } from 'src/app/domain/contact';
import { ContactService } from 'src/app/service/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  contactForm :FormGroup ;
  languages = [
    { value: 'en', viewValue: 'English' },
    { value: 'fr', viewValue: 'Français' },
    { value: 'ar', viewValue: 'العربية' }
  ];
  lang: string;
  adult: string = this.storageService.read('adult');

  constructor(
    private toaster:ToastrService,
   private  contactService:ContactService,
    private fb:FormBuilder,
    private storageService: StorageService,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
    this.lang = this.storageService.read('language');
    if (!this.adult) {
      this.storageService.save('adult', false);
    }
    this.createFormContact();
  }

  languageChange(event: MatSelectChange) {
    this.storageService.save('language', event.value);
    this.translateService.use(event.value);
  }

  adultChange(event: MatSlideToggleChange) {
    if (event.checked === true) {
      this.storageService.save('adult', true);
    } else {
      this.storageService.save('adult', false);
    }
  }
  createFormContact(){
    this.contactForm = this.fb.group({
      'name':[null,Validators.required],
      'email':[null,Validators.email],
      'subject':[null,Validators.required],
      'message':[null,Validators.required]
    }

    )
  }
  sendMessage(){
    if(this.contactForm.invalid){
      return ;
    }
    let val = this.contactForm.value;
    let contact :Contact =new Contact(val.name,val.email,val.subject,val.message,'',new Date());
    this.contactService.addMessage(contact).subscribe(
      res =>
      {console.log(res);
      this.createFormContact();
      this.toaster.success('Your message has been successfully sent');

      },
      err =>{console.log(err.error) 
       this.toaster.error('oops something went wrong');
      }
    )
  }

}
