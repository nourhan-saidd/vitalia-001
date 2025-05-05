import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMoneySellerComponent } from './admin-money-seller.component';

describe('AdminMoneySellerComponent', () => {
  let component: AdminMoneySellerComponent;
  let fixture: ComponentFixture<AdminMoneySellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminMoneySellerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminMoneySellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
