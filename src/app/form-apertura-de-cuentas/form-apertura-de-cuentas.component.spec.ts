import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAPERTURADECUENTASComponent } from './form-apertura-de-cuentas.component';

describe('FormAPERTURADECUENTASComponent', () => {
  let component: FormAPERTURADECUENTASComponent;
  let fixture: ComponentFixture<FormAPERTURADECUENTASComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAPERTURADECUENTASComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAPERTURADECUENTASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
