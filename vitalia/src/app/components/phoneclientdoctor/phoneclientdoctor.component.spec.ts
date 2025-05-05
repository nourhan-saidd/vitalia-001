import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneclientdoctorComponent } from './phoneclientdoctor.component';

describe('PhoneclientdoctorComponent', () => {
  let component: PhoneclientdoctorComponent;
  let fixture: ComponentFixture<PhoneclientdoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneclientdoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneclientdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
