import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentinfoComponent } from './appointmentinfo.component';

describe('AppointmentinfoComponent', () => {
  let component: AppointmentinfoComponent;
  let fixture: ComponentFixture<AppointmentinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentinfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
