import { TestBed } from '@angular/core/testing';

import { RestSettingsService } from './rest-settings.service';

describe('RestSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestSettingsService = TestBed.get(RestSettingsService);
    expect(service).toBeTruthy();
  });
});
