import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentinfoclientComponent } from './appointmentinfoclient.component';

describe('AppointmentinfoclientComponent', () => {
  let component: AppointmentinfoclientComponent;
  let fixture: ComponentFixture<AppointmentinfoclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentinfoclientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmentinfoclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
