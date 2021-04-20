import { TestBed } from '@angular/core/testing';

import { SideBarPatientService } from './side-bar-patient.service';

describe('SideBarPatientService', () => {
  let service: SideBarPatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideBarPatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
