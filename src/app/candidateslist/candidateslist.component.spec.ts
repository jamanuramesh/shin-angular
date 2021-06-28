import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateslistComponent } from './candidateslist.component';

describe('CandidateslistComponent', () => {
  let component: CandidateslistComponent;
  let fixture: ComponentFixture<CandidateslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
