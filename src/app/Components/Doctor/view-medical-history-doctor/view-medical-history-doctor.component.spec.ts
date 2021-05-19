import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMedicalHistoryDoctorComponent } from './view-medical-history-doctor.component';

describe('ViewMedicalHistoryDoctorComponent', () => {
  let component: ViewMedicalHistoryDoctorComponent;
  let fixture: ComponentFixture<ViewMedicalHistoryDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMedicalHistoryDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMedicalHistoryDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
