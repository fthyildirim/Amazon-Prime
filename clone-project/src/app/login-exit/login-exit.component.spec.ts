import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginExitComponent } from './login-exit.component';

describe('LoginExitComponent', () => {
  let component: LoginExitComponent;
  let fixture: ComponentFixture<LoginExitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginExitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
