import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serch1Component } from './serch1.component';

describe('Serch1Component', () => {
  let component: Serch1Component;
  let fixture: ComponentFixture<Serch1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Serch1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Serch1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
