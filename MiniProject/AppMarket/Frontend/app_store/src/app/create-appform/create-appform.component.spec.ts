import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAppformComponent } from './create-appform.component';

describe('CreateAppformComponent', () => {
  let component: CreateAppformComponent;
  let fixture: ComponentFixture<CreateAppformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAppformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAppformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
