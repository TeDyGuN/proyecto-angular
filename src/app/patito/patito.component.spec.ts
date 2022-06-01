import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatitoComponent } from './patito.component';

describe('PatitoComponent', () => {
  let component: PatitoComponent;
  let fixture: ComponentFixture<PatitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
