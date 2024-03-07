import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketernameComponent } from './cricketername.component';

describe('CricketernameComponent', () => {
  let component: CricketernameComponent;
  let fixture: ComponentFixture<CricketernameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CricketernameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CricketernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
