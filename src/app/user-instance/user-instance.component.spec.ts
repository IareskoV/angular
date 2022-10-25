import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInstanceComponent } from './user-instance.component';

describe('UserInstanceComponent', () => {
  let component: UserInstanceComponent;
  let fixture: ComponentFixture<UserInstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInstanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
