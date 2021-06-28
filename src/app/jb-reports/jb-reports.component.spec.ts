import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JbReportsComponent } from './jb-reports.component';

describe('JbReportsComponent', () => {
  let component: JbReportsComponent;
  let fixture: ComponentFixture<JbReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JbReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JbReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
