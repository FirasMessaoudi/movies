import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbyimdbComponent } from './productbyimdb.component';

describe('ProductbyimdbComponent', () => {
  let component: ProductbyimdbComponent;
  let fixture: ComponentFixture<ProductbyimdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductbyimdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductbyimdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
