import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalledAppsUserComponent } from './installed-apps-user.component';

describe('InstalledAppsUserComponent', () => {
  let component: InstalledAppsUserComponent;
  let fixture: ComponentFixture<InstalledAppsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstalledAppsUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstalledAppsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
