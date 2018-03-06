import { TestBed, inject } from '@angular/core/testing';

import { OrganizationService } from './organization.service';
import { HttpClientModule } from '@angular/common/http';

describe('OrganizationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [OrganizationService]
    });
  });

  it('should load', inject([OrganizationService], (service: OrganizationService) => {
    expect(service).toBeTruthy();
  }));
});
