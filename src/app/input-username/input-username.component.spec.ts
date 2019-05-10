import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputUsernameComponent } from './input-username.component';

describe('InputUsernameComponent', () => {
  let component: InputUsernameComponent;
  let fixture: ComponentFixture<InputUsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputUsernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
