import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingmoviesComponent } from './upcomingmovies.component';

describe('UpcomingmoviesComponent', () => {
  let component: UpcomingmoviesComponent;
  let fixture: ComponentFixture<UpcomingmoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingmoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
