import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavsellerComponent } from './navseller.component';

describe('NavsellerComponent', () => {
  let component: NavsellerComponent;
  let fixture: ComponentFixture<NavsellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavsellerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
