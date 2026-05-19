import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteUtilisateur } from './carte-utilisateur';

describe('CarteUtilisateur', () => {
  let component: CarteUtilisateur;
  let fixture: ComponentFixture<CarteUtilisateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteUtilisateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteUtilisateur);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
