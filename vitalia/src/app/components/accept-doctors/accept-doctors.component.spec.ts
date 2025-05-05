import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptDoctorsComponent } from './accept-doctors.component';

describe('AcceptDoctorsComponent', () => {
  let component: AcceptDoctorsComponent;
  let fixture: ComponentFixture<AcceptDoctorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptDoctorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcceptDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
