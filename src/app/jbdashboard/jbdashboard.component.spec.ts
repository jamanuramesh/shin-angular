import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JbdashboardComponent } from './jbdashboard.component';

describe('JbdashboardComponent', () => {
  let component: JbdashboardComponent;
  let fixture: ComponentFixture<JbdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JbdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JbdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
