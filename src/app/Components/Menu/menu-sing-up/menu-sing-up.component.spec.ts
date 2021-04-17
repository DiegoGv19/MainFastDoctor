import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSingUpComponent } from './menu-sing-up.component';

describe('MenuSingUpComponent', () => {
  let component: MenuSingUpComponent;
  let fixture: ComponentFixture<MenuSingUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSingUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
