import { TestBed } from '@angular/core/testing';

import { SafeurlserviceService } from './safeurlservice.service';

describe('SafeurlserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SafeurlserviceService = TestBed.get(SafeurlserviceService);
    expect(service).toBeTruthy();
  });
});
