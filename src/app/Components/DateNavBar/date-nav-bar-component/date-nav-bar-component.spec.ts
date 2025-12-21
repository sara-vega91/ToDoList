import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateNavBarComponent } from './date-nav-bar-component';

describe('DateNavBarComponent', () => {
  let component: DateNavBarComponent;
  let fixture: ComponentFixture<DateNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateNavBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
