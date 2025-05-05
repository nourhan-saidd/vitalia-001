import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptSellersComponent } from './accept-sellers.component';

describe('AcceptSellersComponent', () => {
  let component: AcceptSellersComponent;
  let fixture: ComponentFixture<AcceptSellersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptSellersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcceptSellersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
