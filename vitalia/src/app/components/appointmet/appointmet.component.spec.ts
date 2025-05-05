import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmetComponent } from './appointmet.component';

describe('AppointmetComponent', () => {
  let component: AppointmetComponent;
  let fixture: ComponentFixture<AppointmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppointmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
