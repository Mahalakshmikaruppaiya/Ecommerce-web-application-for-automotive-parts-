import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetProductByIdComponent } from './admin-get-product-by-id.component';

describe('AdminGetProductByIdComponent', () => {
  let component: AdminGetProductByIdComponent;
  let fixture: ComponentFixture<AdminGetProductByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGetProductByIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGetProductByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
