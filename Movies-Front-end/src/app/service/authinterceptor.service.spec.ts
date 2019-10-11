import { TestBed } from '@angular/core/testing';

import { AuthinterceptorService } from './authinterceptor.service';

describe('AuthinterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthinterceptorService = TestBed.get(AuthinterceptorService);
    expect(service).toBeTruthy();
  });
});
