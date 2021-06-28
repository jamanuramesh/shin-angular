import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HirinstagesComponent } from './hirinstages.component';

describe('HirinstagesComponent', () => {
  let component: HirinstagesComponent;
  let fixture: ComponentFixture<HirinstagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HirinstagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HirinstagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
