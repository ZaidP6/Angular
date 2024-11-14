import { TestBed } from '@angular/core/testing';

import { PopFilmsService } from './pop-films.service';

describe('PopFilmsService', () => {
  let service: PopFilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopFilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
