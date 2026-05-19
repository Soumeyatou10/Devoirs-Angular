import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonAccessible } from './bouton-accessible';

describe('BoutonAccessible', () => {
  let component: BoutonAccessible;
  let fixture: ComponentFixture<BoutonAccessible>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutonAccessible]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonAccessible);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
