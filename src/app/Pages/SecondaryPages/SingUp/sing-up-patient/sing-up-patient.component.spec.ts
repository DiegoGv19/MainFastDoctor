import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingUpPatientComponent } from './sing-up-patient.component';

describe('SingUpPatientComponent', () => {
  let component: SingUpPatientComponent;
  let fixture: ComponentFixture<SingUpPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingUpPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingUpPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
