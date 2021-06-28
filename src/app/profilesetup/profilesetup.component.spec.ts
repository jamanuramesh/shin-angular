import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesetupComponent } from './profilesetup.component';

describe('ProfilesetupComponent', () => {
  let component: ProfilesetupComponent;
  let fixture: ComponentFixture<ProfilesetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
