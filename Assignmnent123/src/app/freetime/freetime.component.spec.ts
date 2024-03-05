import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreetimeComponent } from './freetime.component';

describe('FreetimeComponent', () => {
  let component: FreetimeComponent;
  let fixture: ComponentFixture<FreetimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreetimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
