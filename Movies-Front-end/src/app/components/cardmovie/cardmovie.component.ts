import {Component, OnInit, Input, input, InputSignal} from '@angular/core';

@Component({
  selector: 'app-cardmovie',
  templateUrl: './cardmovie.component.html',
  styleUrls: ['./cardmovie.component.scss']
})
export class CardmovieComponent implements OnInit {
  @Input()
  id: number;
  image: InputSignal<string> = input('');
  @Input()
  title: string;
  @Input()
  note: number;
  @Input()
  numbervisits: number;
  @Input()
  dateRelease: Date;
  @Input()
  section: string;
  constructor() { }

  ngOnInit() {
    //this.image = 'https://image.tmdb.org/t/p/original/'+this.image;
  }

}
