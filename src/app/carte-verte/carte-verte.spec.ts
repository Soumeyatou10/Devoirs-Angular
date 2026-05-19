import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteVerte } from './carte-verte';

describe('CarteVerte', () => {
  let component: CarteVerte;
  let fixture: ComponentFixture<CarteVerte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteVerte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteVerte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
