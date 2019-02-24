import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanSpeedComponent } from './fan-speed.component';

describe('FanSpeedComponent', () => {
  let component: FanSpeedComponent;
  let fixture: ComponentFixture<FanSpeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanSpeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
