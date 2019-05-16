import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Wifi24Component } from './wifi24.component';

describe('Wifi24Component', () => {
  let component: Wifi24Component;
  let fixture: ComponentFixture<Wifi24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wifi24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Wifi24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
