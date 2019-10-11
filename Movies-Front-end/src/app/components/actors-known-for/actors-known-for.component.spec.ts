import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsKnownForComponent } from './actors-known-for.component';

describe('ActorsKnownForComponent', () => {
  let component: ActorsKnownForComponent;
  let fixture: ComponentFixture<ActorsKnownForComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorsKnownForComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsKnownForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
