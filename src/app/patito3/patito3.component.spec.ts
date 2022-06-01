import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Patito3Component } from './patito3.component';

describe('Patito3Component', () => {
  let component: Patito3Component;
  let fixture: ComponentFixture<Patito3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Patito3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Patito3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
