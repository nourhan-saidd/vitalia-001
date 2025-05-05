import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneydoctorComponent } from './moneydoctor.component';

describe('MoneydoctorComponent', () => {
  let component: MoneydoctorComponent;
  let fixture: ComponentFixture<MoneydoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneydoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoneydoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
