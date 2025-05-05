import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSellersFilesComponent } from './show-sellers-files.component';

describe('ShowSellersFilesComponent', () => {
  let component: ShowSellersFilesComponent;
  let fixture: ComponentFixture<ShowSellersFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSellersFilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowSellersFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
