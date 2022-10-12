import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOPComponent } from './fop.component';

describe('FOPComponent', () => {
  let component: FOPComponent;
  let fixture: ComponentFixture<FOPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FOPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FOPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
