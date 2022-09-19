import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageElectronicsComponent } from './manage-electronics.component';

describe('ManageElectronicsComponent', () => {
  let component: ManageElectronicsComponent;
  let fixture: ComponentFixture<ManageElectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageElectronicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
