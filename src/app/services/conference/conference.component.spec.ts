import { ComponentFixture, TestBed } from '@angular/core/testing';

import {Conference} from "../../model/conference/conference.component";

describe('ConferenceComponent', () => {
  let component: Conference;
  let fixture: ComponentFixture<Conference>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Conference ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Conference);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
