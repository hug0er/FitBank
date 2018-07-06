import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSALDOPRESTAMOSComponent } from './form-saldo-prestamos.component';

describe('FormSALDOPRESTAMOSComponent', () => {
  let component: FormSALDOPRESTAMOSComponent;
  let fixture: ComponentFixture<FormSALDOPRESTAMOSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSALDOPRESTAMOSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSALDOPRESTAMOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
