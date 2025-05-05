import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesellerComponent } from './profileseller.component';

describe('ProfilesellerComponent', () => {
  let component: ProfilesellerComponent;
  let fixture: ComponentFixture<ProfilesellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilesellerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfilesellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
