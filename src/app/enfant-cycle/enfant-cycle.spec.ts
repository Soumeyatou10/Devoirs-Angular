import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantCycle } from './enfant-cycle';

describe('EnfantCycle', () => {
  let component: EnfantCycle;
  let fixture: ComponentFixture<EnfantCycle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnfantCycle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnfantCycle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
