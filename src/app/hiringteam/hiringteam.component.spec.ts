import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringteamComponent } from './hiringteam.component';

describe('HiringteamComponent', () => {
  let component: HiringteamComponent;
  let fixture: ComponentFixture<HiringteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiringteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiringteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
