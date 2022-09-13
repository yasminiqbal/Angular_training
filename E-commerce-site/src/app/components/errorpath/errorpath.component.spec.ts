import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorpathComponent } from './errorpath.component';

describe('ErrorpathComponent', () => {
  let component: ErrorpathComponent;
  let fixture: ComponentFixture<ErrorpathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorpathComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorpathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
