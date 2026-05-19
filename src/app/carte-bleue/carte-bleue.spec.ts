import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteBleue } from './carte-bleue';

describe('CarteBleue', () => {
  let component: CarteBleue;
  let fixture: ComponentFixture<CarteBleue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteBleue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarteBleue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
