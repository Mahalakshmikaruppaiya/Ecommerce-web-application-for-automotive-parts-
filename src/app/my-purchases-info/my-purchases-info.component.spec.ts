import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPurchasesInfoComponent } from './my-purchases-info.component';

describe('MyPurchasesInfoComponent', () => {
  let component: MyPurchasesInfoComponent;
  let fixture: ComponentFixture<MyPurchasesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPurchasesInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPurchasesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
