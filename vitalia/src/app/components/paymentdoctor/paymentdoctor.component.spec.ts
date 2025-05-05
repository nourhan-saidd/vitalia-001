import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentdoctorComponent } from './paymentdoctor.component';

describe('PaymentdoctorComponent', () => {
  let component: PaymentdoctorComponent;
  let fixture: ComponentFixture<PaymentdoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentdoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaymentdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
