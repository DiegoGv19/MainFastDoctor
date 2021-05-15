import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppointmentAcceptedComponent } from './list-appointment-accepted.component';

describe('ListAppointmentAcceptedComponent', () => {
  let component: ListAppointmentAcceptedComponent;
  let fixture: ComponentFixture<ListAppointmentAcceptedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAppointmentAcceptedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAppointmentAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
