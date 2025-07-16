import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adrresslist } from './adrresslist';

describe('Adrresslist', () => {
  let component: Adrresslist;
  let fixture: ComponentFixture<Adrresslist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adrresslist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adrresslist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
