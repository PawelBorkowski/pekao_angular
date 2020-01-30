import { TestBed } from '@angular/core/testing';

import { SendingFormsService } from './sending-forms.service';

describe('SendingFormsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SendingFormsService = TestBed.get(SendingFormsService);
    expect(service).toBeTruthy();
  });
});
