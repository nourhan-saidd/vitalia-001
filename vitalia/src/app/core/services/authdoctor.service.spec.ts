import { TestBed } from '@angular/core/testing';

import { AuthdoctorService } from './authdoctor.service';

describe('AuthdoctorService', () => {
  let service: AuthdoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthdoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
