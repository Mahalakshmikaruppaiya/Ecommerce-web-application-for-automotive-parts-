import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serch2Component } from './serch2.component';

describe('Serch2Component', () => {
  let component: Serch2Component;
  let fixture: ComponentFixture<Serch2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Serch2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Serch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
