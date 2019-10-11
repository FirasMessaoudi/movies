import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ICategory } from 'src/app/domain/icategory';
import { IUser } from 'src/app/domain/iuser';
import { UserService } from 'src/app/service/user.service';
import { IFavorit } from 'src/app/domain/ifavorit';
import { TokenStorageService } from 'src/app/service/tokenstorage.service';
import { WatchlistComponent } from '../watchlist/watchlist.component';
import { ModalDirective } from 'angular-bootstrap-md';
import { IMovieUserId } from 'src/app/domain/imovieuserid';
import { MovieService } from 'src/app/service/movie.service';
@Component({
  selector: 'app-modalfavorit',
  templateUrl: './modalfavorit.component.html',
  styleUrls: ['./modalfavorit.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalfavoritComponent implements OnInit {
  @ViewChild(ModalDirective) basicModal: ModalDirective;
  @Output() updateFav =   new EventEmitter<any>();
  @Output() updateWatchlist = new EventEmitter<any>();
  @Input()
  id: number;
  @Input()
  title: string;
  @Input()
  image: string;
  @Input()
  description: string;
  @Input()
  dateRelease: Date;
  @Input()
  country: string;
  @Input()
  cat: ICategory[];
  @Input()
  section:string;
  @Input()
  note:number;
  @Input()
  numbervisits:number;
  watched :boolean;
  watchList: IFavorit;
  user: IUser;
  closeResult: string;
  existInwatchList: boolean;
  existInFavoris: boolean;
  visible:boolean;
  username:string;
  rate : number;
  hideModal() {
    this.basicModal.hide();
  }
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private tokenStorage: TokenStorageService,private modalService: NgbModal , private serviceUser: UserService, private serviceMovie: MovieService) { }

  ngOnInit() {
    if(this.tokenStorage.getToken()){
      this.username=this.tokenStorage.getUsername();
    
    this.serviceUser.getUser(this.username).subscribe(
      res => this.user = res,
      () => {
        this.serviceUser.existsInWatchList(new IMovieUserId(this.id,this.user.email)).subscribe(
          res => this.existInwatchList = res,
          err => console.log(this.existInwatchList),
          () => {
            console.log("hello from wathclkst "+this.existInwatchList);
          }
        );
       }
    );
      }
  }
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  checkIfExistInWatchList() {

    this.serviceUser.existsInWatchList(new IMovieUserId(this.id,this.user.email)).subscribe(
      res => this.existInwatchList = res,
      err => console.log(this.existInwatchList),
      ()=>{
        console.log(this.existInwatchList)
          this.serviceUser.existsInFavoris(new IMovieUserId(this.id,this.user.email)).subscribe(
          res =>this.existInFavoris =res,
          err =>console.log("famma mochkla"),
         () => {
           console.log(this.existInFavoris)
           this.serviceUser.isWatched(new IMovieUserId(this.id,this.user.email)).subscribe(
             res => this.watched = res,
             err=>console.log(err.error)
           )
           console.log("hello boy " +this.watched);
           this.serviceUser.getMovieNote(new IMovieUserId(this.id,this.user.email)).subscribe(
            res => this.rate = res,
            err =>console.log(err.error),
            ()=>{
              console.log(this.rate);
            }
          )
         }
        );
      //  }
      }
    );
    this.visible =true;
        
  }
  addOrDeleteToMyWatchList(){
    let fav = new IFavorit(new IMovieUserId(this.id,this.user.email));
    fav.section = this.section;
    this.serviceUser.addToList(fav)
    .subscribe(
      () => console.log('hhhhh'));
    //  alert('added to watch list');
      this.existInwatchList=!this.existInwatchList;
      this.updateWatchlist.emit(this.id);
      this.hideModal();
  }
  addOrDeleteFavorite() {
    let fav = new IFavorit(new IMovieUserId(this.id,this.user.email));
  
    this.serviceUser.addToMyFav(fav).subscribe(
      () => console.log('user = ', this.user.email, 'id = ' , this.id),
      );
      this.existInFavoris = !this.existInFavoris;
      this.hideModal();
      this.updateFav.emit(this.id);
      //this.watchListComponent.getFavoris();
  }
  watchMovie(): void {
     let productuser = new IMovieUserId(this.id, this.user.email);
    this.serviceUser.watchUnWatchMovie(new IFavorit(productuser))
        .subscribe(() => console.log('good'));
        this.watched = !this.watched;
        //this.watchListComponent.getWatchList();
  }
  rateMovie(event) {
    // this.productUserID = new IMovieUserId(this.id, this.user.email);
    let fav = new IFavorit(new IMovieUserId(this.id,this.user.email));
    fav.section = this.section;
    fav.note = event;
    if(this.tokenStorage.getToken()){
    console.log(this.rate);
    this.rate=event;
    this.serviceUser.rateMovie(fav).subscribe(
      res=>console.log(res),
      err => console.log('msg')
    );
    console.log(this.rate);
    }

    }

}
