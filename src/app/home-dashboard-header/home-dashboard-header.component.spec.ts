import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDashboardHeaderComponent } from './home-dashboard-header.component';

describe('HomeDashboardHeaderComponent', () => {
  let component: HomeDashboardHeaderComponent;
  let fixture: ComponentFixture<HomeDashboardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeDashboardHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeDashboardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
