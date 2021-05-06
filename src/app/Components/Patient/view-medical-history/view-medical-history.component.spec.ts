import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMedicalHistoryComponent } from './view-medical-history.component';

describe('ViewMedicalHistoryComponent', () => {
  let component: ViewMedicalHistoryComponent;
  let fixture: ComponentFixture<ViewMedicalHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMedicalHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMedicalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
