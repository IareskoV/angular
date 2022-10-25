import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInstanceButtonsComponent } from './user-instance-buttons.component';

describe('UserInstanceButtonsComponent', () => {
  let component: UserInstanceButtonsComponent;
  let fixture: ComponentFixture<UserInstanceButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInstanceButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInstanceButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
