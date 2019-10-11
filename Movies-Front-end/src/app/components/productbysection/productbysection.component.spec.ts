import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbysectionComponent } from './productbysection.component';

describe('ProductbysectionComponent', () => {
  let component: ProductbysectionComponent;
  let fixture: ComponentFixture<ProductbysectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductbysectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductbysectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
