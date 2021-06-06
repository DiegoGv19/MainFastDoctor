import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorGoogleMapsComponent } from './doctor-google-maps.component';

describe('DoctorGoogleMapsComponent', () => {
  let component: DoctorGoogleMapsComponent;
  let fixture: ComponentFixture<DoctorGoogleMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorGoogleMapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorGoogleMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
