import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneysellerComponent } from './moneyseller.component';

describe('MoneysellerComponent', () => {
  let component: MoneysellerComponent;
  let fixture: ComponentFixture<MoneysellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneysellerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoneysellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
