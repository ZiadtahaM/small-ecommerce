import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reallogin } from './reallogin';

describe('Reallogin', () => {
  let component: Reallogin;
  let fixture: ComponentFixture<Reallogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reallogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reallogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
