import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatusersComponent } from './chatusers.component';

describe('ChatusersComponent', () => {
  let component: ChatusersComponent;
  let fixture: ComponentFixture<ChatusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatusersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
