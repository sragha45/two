import { TestBed, inject } from '@angular/core/testing';

import { SiblingInteractionService } from './sidenav-graph-service';

describe('SiblingInteractionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SiblingInteractionService]
    });
  });

  it('should be created', inject([SiblingInteractionService], (service: SiblingInteractionService) => {
    expect(service).toBeTruthy();
  }));
});
