import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBoutons } from './page-boutons';

describe('PageBoutons', () => {
  let component: PageBoutons;
  let fixture: ComponentFixture<PageBoutons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBoutons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBoutons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
