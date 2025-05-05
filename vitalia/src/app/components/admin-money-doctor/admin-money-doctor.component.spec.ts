import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMoneyDoctorComponent } from './admin-money-doctor.component';

describe('AdminMoneyDoctorComponent', () => {
  let component: AdminMoneyDoctorComponent;
  let fixture: ComponentFixture<AdminMoneyDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMoneyDoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminMoneyDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
