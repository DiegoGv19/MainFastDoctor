import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSingUpComponent } from './alert-sing-up.component';

describe('AlertSingUpComponent', () => {
  let component: AlertSingUpComponent;
  let fixture: ComponentFixture<AlertSingUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertSingUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
