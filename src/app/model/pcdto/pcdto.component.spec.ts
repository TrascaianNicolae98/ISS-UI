import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcdtoComponent } from './pcdto.component';

describe('PcdtoComponent', () => {
  let component: PcdtoComponent;
  let fixture: ComponentFixture<PcdtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcdtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcdtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
