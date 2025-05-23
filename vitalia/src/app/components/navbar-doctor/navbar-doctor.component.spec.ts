import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDoctorComponent } from './navbar-doctor.component';

describe('NavbarDoctorComponent', () => {
  let component: NavbarDoctorComponent;
  let fixture: ComponentFixture<NavbarDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarDoctorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
