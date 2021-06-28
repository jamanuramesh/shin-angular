import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HirperformanceComponent } from './hirperformance.component';

describe('HirperformanceComponent', () => {
  let component: HirperformanceComponent;
  let fixture: ComponentFixture<HirperformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HirperformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HirperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
