import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMedicalHistoryComponent } from './register-medical-history.component';

describe('RegisterMedicalHistoryComponent', () => {
  let component: RegisterMedicalHistoryComponent;
  let fixture: ComponentFixture<RegisterMedicalHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterMedicalHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMedicalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
