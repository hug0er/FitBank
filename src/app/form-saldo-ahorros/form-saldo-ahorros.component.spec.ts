import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSALDOAHORROSComponent } from './form-saldo-ahorros.component';

describe('FormSALDOAHORROSComponent', () => {
  let component: FormSALDOAHORROSComponent;
  let fixture: ComponentFixture<FormSALDOAHORROSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSALDOAHORROSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSALDOAHORROSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
