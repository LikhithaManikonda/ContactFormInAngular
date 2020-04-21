import { TestBed } from '@angular/core/testing';

import { ContactInformationServiceService } from './contact-information-service.service';

describe('ContactInformationServiceService', () => {
  let service: ContactInformationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactInformationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
