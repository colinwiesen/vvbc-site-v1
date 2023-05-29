import { TestBed } from '@angular/core/testing';

import { BibleOnDayService } from './bible-on-day.service';

describe('BibleOnDayService', () => {
  let service: BibleOnDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibleOnDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
