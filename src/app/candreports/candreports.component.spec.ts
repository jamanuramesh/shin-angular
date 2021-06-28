import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandreportsComponent } from './candreports.component';

describe('CandreportsComponent', () => {
  let component: CandreportsComponent;
  let fixture: ComponentFixture<CandreportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandreportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandreportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
