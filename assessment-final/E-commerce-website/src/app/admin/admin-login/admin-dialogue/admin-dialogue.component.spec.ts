import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDialogueComponent } from './admin-dialogue.component';

describe('AdminDialogueComponent', () => {
  let component: AdminDialogueComponent;
  let fixture: ComponentFixture<AdminDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDialogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
