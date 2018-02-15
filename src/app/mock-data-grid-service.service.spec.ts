import { TestBed, inject } from '@angular/core/testing';

import { MockDataGridService } from './mock-data-grid-service';

describe('MockDataGridServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockDataGridService]
    });
  });

  it('should be created', inject([MockDataGridService], (service: MockDataGridService) => {
    expect(service).toBeTruthy();
  }));
});
