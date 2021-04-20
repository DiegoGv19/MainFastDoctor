import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvailableDoctorsComponent } from './list-available-doctors.component';

describe('ListAvailableDoctorsComponent', () => {
  let component: ListAvailableDoctorsComponent;
  let fixture: ComponentFixture<ListAvailableDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAvailableDoctorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAvailableDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
