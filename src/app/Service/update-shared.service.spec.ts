import { TestBed } from '@angular/core/testing';

import { UpdateSharedService } from './update-shared.service';

describe('UpdateSharedService', () => {
  let service: UpdateSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
