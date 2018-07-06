import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPOSICIONCONSOLIDADAComponent } from './form-posicion-consolidada.component';

describe('FormPOSICIONCONSOLIDADAComponent', () => {
  let component: FormPOSICIONCONSOLIDADAComponent;
  let fixture: ComponentFixture<FormPOSICIONCONSOLIDADAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPOSICIONCONSOLIDADAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPOSICIONCONSOLIDADAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
