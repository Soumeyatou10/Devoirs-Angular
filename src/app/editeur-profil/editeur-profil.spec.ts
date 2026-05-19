import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeurProfil } from './editeur-profil';

describe('EditeurProfil', () => {
  let component: EditeurProfil;
  let fixture: ComponentFixture<EditeurProfil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditeurProfil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditeurProfil);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
