import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientloginComponent } from './clientlogin.component';

describe('ClientloginComponent', () => {
  let component: ClientloginComponent;
  let fixture: ComponentFixture<ClientloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientloginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
