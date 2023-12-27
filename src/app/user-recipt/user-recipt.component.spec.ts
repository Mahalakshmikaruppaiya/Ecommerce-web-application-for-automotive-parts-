import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReciptComponent } from './user-recipt.component';

describe('UserReciptComponent', () => {
  let component: UserReciptComponent;
  let fixture: ComponentFixture<UserReciptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReciptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReciptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
