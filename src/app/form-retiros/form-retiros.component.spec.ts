import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRETIROSComponent } from './form-retiros.component';

describe('FormRETIROSComponent', () => {
  let component: FormRETIROSComponent;
  let fixture: ComponentFixture<FormRETIROSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRETIROSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRETIROSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
