import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GagdetsearchComponent } from './gagdetsearch.component';

describe('GagdetsearchComponent', () => {
  let component: GagdetsearchComponent;
  let fixture: ComponentFixture<GagdetsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GagdetsearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GagdetsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
