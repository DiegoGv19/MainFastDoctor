import { TestBed } from '@angular/core/testing';

import { SideBarDoctorService } from './side-bar-doctor.service';

describe('SideBarDoctorService', () => {
  let service: SideBarDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SideBarDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
