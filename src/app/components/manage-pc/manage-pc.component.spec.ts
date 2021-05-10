import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePcComponent } from './manage-pc.component';

describe('ManagePcComponent', () => {
  let component: ManagePcComponent;
  let fixture: ComponentFixture<ManagePcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagePcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
