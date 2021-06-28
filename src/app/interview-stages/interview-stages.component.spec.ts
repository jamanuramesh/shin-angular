import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewStagesComponent } from './interview-stages.component';

describe('InterviewStagesComponent', () => {
  let component: InterviewStagesComponent;
  let fixture: ComponentFixture<InterviewStagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewStagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
