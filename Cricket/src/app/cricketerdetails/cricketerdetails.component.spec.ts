import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketerdetailsComponent } from './cricketerdetails.component';

describe('CricketerdetailsComponent', () => {
  let component: CricketerdetailsComponent;
  let fixture: ComponentFixture<CricketerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CricketerdetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CricketerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
