import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginUserBodyComponent } from './login-user-body.component';

describe('LoginUserBodyComponent', () => {
  let component: LoginUserBodyComponent;
  let fixture: ComponentFixture<LoginUserBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginUserBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginUserBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
