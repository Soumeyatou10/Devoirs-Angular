import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCycle } from './parent-cycle';

describe('ParentCycle', () => {
  let component: ParentCycle;
  let fixture: ComponentFixture<ParentCycle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentCycle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentCycle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
