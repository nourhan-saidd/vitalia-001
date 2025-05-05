import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddateComponent } from './adddate.component';

describe('AdddateComponent', () => {
  let component: AdddateComponent;
  let fixture: ComponentFixture<AdddateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdddateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdddateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
