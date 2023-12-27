import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypurchaseEmptyComponent } from './mypurchase-empty.component';

describe('MypurchaseEmptyComponent', () => {
  let component: MypurchaseEmptyComponent;
  let fixture: ComponentFixture<MypurchaseEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypurchaseEmptyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MypurchaseEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
