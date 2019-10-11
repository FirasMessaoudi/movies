import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllproductbycategoryComponent } from './allproductbycategory.component';

describe('AllproductbycategoryComponent', () => {
  let component: AllproductbycategoryComponent;
  let fixture: ComponentFixture<AllproductbycategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllproductbycategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllproductbycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
