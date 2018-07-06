import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDEPOSITOSComponent } from './form-depositos.component';

describe('FormDEPOSITOSComponent', () => {
  let component: FormDEPOSITOSComponent;
  let fixture: ComponentFixture<FormDEPOSITOSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDEPOSITOSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDEPOSITOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
