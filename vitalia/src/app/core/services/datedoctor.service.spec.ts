import { TestBed } from '@angular/core/testing';

import { DatedoctorService } from './datedoctor.service';

describe('DatedoctorService', () => {
  let service: DatedoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatedoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
