import { TestBed } from '@angular/core/testing';

import { RequestCacheWithMapService } from '../request-cache.service';

describe('RequestCacheWithMapService', () => {
  let service: RequestCacheWithMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestCacheWithMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
