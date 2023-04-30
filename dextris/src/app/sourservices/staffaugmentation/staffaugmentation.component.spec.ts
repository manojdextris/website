import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffaugmentationComponent } from './staffaugmentation.component';

describe('StaffaugmentationComponent', () => {
  let component: StaffaugmentationComponent;
  let fixture: ComponentFixture<StaffaugmentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffaugmentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffaugmentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
