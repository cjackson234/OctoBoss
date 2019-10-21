import { TestBed } from '@angular/core/testing';

import { OctoprintService } from './octoprint.service';

describe('OctoprintService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OctoprintService = TestBed.get(OctoprintService);
    expect(service).toBeTruthy();
  });
});
