import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardmovieComponent } from './cardmovie.component';

describe('CardmovieComponent', () => {
  let component: CardmovieComponent;
  let fixture: ComponentFixture<CardmovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardmovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
