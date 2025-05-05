import { TestBed } from '@angular/core/testing';

import { AuthsellerService } from './authseller.service';

describe('AuthsellerService', () => {
  let service: AuthsellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthsellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
