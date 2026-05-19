import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApercuProfil } from './apercu-profil';

describe('ApercuProfil', () => {
  let component: ApercuProfil;
  let fixture: ComponentFixture<ApercuProfil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApercuProfil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApercuProfil);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
