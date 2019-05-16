import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wifi5Component } from './wifi5.component';

describe('Wifi5Component', () => {
  let component: Wifi5Component;
  let fixture: ComponentFixture<Wifi5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wifi5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wifi5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
