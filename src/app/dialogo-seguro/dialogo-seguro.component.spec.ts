import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoSeguroComponent } from './dialogo-seguro.component';

describe('DialogoSeguroComponent', () => {
  let component: DialogoSeguroComponent;
  let fixture: ComponentFixture<DialogoSeguroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogoSeguroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoSeguroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
