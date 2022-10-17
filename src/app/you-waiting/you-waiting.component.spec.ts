import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouWaitingComponent } from './you-waiting.component';

describe('YouWaitingComponent', () => {
  let component: YouWaitingComponent;
  let fixture: ComponentFixture<YouWaitingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YouWaitingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YouWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
