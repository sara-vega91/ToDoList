import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDescriptionModal } from './dialog-description-modal';

describe('DialogDescriptionModal', () => {
  let component: DialogDescriptionModal;
  let fixture: ComponentFixture<DialogDescriptionModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogDescriptionModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDescriptionModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
