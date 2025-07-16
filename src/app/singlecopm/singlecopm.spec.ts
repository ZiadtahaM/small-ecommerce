import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singlecopm } from './singlecopm';

describe('Singlecopm', () => {
  let component: Singlecopm;
  let fixture: ComponentFixture<Singlecopm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Singlecopm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Singlecopm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
