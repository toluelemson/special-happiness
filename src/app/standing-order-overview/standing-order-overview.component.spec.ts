import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingOrderOverviewComponent } from './standing-order-overview.component';

describe('StandingOrderOverviewComponent', () => {
  let component: StandingOrderOverviewComponent;
  let fixture: ComponentFixture<StandingOrderOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandingOrderOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandingOrderOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
