import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCREACIONDEPERSONASComponent } from './form-creacion-de-personas.component';

describe('FormCREACIONDEPERSONASComponent', () => {
  let component: FormCREACIONDEPERSONASComponent;
  let fixture: ComponentFixture<FormCREACIONDEPERSONASComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCREACIONDEPERSONASComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCREACIONDEPERSONASComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
