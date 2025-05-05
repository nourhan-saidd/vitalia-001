import { TestBed } from '@angular/core/testing';

import { ChatusersService } from './chatusers.service';

describe('ChatusersService', () => {
  let service: ChatusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
