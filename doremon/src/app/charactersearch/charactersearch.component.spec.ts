import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersearchComponent } from './charactersearch.component';

describe('CharactersearchComponent', () => {
  let component: CharactersearchComponent;
  let fixture: ComponentFixture<CharactersearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharactersearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
