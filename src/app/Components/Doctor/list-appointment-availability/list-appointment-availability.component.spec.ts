import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppointmentAvailabilityComponent } from './list-appointment-availability.component';

describe('ListAppointmentAvailabilityComponent', () => {
  let component: ListAppointmentAvailabilityComponent;
  let fixture: ComponentFixture<ListAppointmentAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAppointmentAvailabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAppointmentAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
