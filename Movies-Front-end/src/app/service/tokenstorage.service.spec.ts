import { TestBed } from '@angular/core/testing';

import { TokenstorageService } from './tokenstorage.service';

describe('TokenstorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenstorageService = TestBed.get(TokenstorageService);
    expect(service).toBeTruthy();
  });
});
