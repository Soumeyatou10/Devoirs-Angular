import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteRouge } from './carte-rouge';

describe('CarteRouge', () => {
  let component: CarteRouge;
  let fixture: ComponentFixture<CarteRouge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteRouge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteRouge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
