import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferencePhaseComponent } from './conference-phase.component';

describe('ConferencePhaseComponent', () => {
  let component: ConferencePhaseComponent;
  let fixture: ComponentFixture<ConferencePhaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConferencePhaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferencePhaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
