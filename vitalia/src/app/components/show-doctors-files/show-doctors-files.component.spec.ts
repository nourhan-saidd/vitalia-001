import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDoctorsFilesComponent } from './show-doctors-files.component';

describe('ShowDoctorsFilesComponent', () => {
  let component: ShowDoctorsFilesComponent;
  let fixture: ComponentFixture<ShowDoctorsFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowDoctorsFilesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowDoctorsFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
