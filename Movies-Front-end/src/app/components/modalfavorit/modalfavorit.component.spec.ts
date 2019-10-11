import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalfavoritComponent } from './modalfavorit.component';

describe('ModalfavoritComponent', () => {
  let component: ModalfavoritComponent;
  let fixture: ComponentFixture<ModalfavoritComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalfavoritComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalfavoritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
